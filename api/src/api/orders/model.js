const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    paymentAddress: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    amount: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
