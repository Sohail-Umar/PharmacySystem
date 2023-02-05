const mongoose = require("mongoose")

const product = new mongoose.Schema({
  // id: {
  //   type: Number,
  //   required: true
  // },

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
  },

  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OrdersData"
  }
})


module.exports = mongoose.model("products", product)