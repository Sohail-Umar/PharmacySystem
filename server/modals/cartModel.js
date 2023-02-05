const mongoose = require("mongoose")

const cart = new mongoose.Schema({
  product_name: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  stock: {
    type: Number,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }
})


module.exports = mongoose.model("cart", product)