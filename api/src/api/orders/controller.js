const Order = require("./model");
const Product = require("../products/model");

// getting new address
async function getNewAddress() {
  return "randomaddress212151";
}

async function getAmountForPrice(price) {
    return 1e8
}

exports.create = async function ({ price, productId } = {}) {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Invalid productId");

  const amount = getAmountForPrice(price);
  const address = getNewAddress();
  return await Order.create({
    address: address,
    price: price,
    product: product,
  });
};
