const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  }
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
