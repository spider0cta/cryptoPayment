const { kStringMaxLength } = require("buffer");
const mongoose = require("mongoose");
const TransactionSchema = new mongoose.Schema(
  {
    txid: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    address: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["unconfirmed", "confirmed"],
      required: true,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;
