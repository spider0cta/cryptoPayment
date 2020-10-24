const Order = require("./model");
const Product = require("../products/model");
const request = require("request-promise-cache");

// getting new address
async function getNewAddress() {
  return "randomaddress212151";
}

// quering btc price in usd using coindesk api
async function getAmountForPrice(price) {
  const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  const result = await request({
    url: url,
    cacheKey: url,
    cacheTTL: 15,
    cacheLimit: 24,
    resolveWithFullResponse: false,
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
