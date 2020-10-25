const Order = require("./model");
const Product = require("../products/model");
const request = require("request-promise-cache");
const bitcoin = require("bitcoinjs-lib");
const config = require("../../configuration");
const bip32 = require("bip32");
const xpub = config.get("XPUB")
const root = bitcoin.bip32.fromBase58(xpub ,bitcoin.networks.testnet);
const isTestNet = config.get("TESTNET") === true;
const network = isTestNet ? bitcoin.networks.testnet : bitcoin.networks.bitcoin;
// getting new address
async function getNewAddress() {
    const initialCount = await Order.countDocuments();
    const node = root.derive(initialCount);
    return bitcoin.payments.p2pkh({pubkey:node.publicKey, network}).address
}

// quering btc price in usd using coindesk api
async function getAmountForPrice(price) {
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  const result = await request({
    url: url,
    cacheKey: url,
    cacheTTL: 15,
    cacheLimit: 24,
    resolveWithFullResponse: false
  });
  const response = JSON.parse(result);
  const rate = response["bpi"]["USD"]["rate_float"];
  return parseFloat((price * 1e8) / (rate * 1e8).toFixed(8));
}

exports.create = async function ({ price, productId } = {}) {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Invalid productId");

  const amount = await getAmountForPrice(price);
  const address = await getNewAddress();
  return await Order.create({
    paymentAddress: address,
    amount: amount,
    price: price,
    product: product
  });
};
