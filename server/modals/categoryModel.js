const mongoose = require("mongoose")

const category = new mongoose.Schema({
  // id: {
  //   type: Number,
  //   required: true
  // },

  category_name: {
    type: String,
    required: true,
    // ref: category_name
  },

  description: {
    type: String
  },
})


module.exports = mongoose.model("Category", category)