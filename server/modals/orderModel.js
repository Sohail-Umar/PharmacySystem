const mongoose = require("mongoose")

const order = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UsersDatas"
  },

  product_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "products"
  }],

  price: {
    type: Number,
    default: 0,
  },

  status: {
    type: String,
    enum: ["pending", "completed", "fail"],
    default: "pending"
  },

  order_date: {
    type: Date,
    default: Date.now()
  }
})

order.methods.getTotalPrice = function () {
  return this.product_id.reduce((total, product) => total + product.price, 0);
};

module.exports = mongoose.model("OrdersData", order)







// items: [
//   {
//     product_id: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'products'
//     },
//     quantity: {
//       type: Number,
//       required: true
//     }
//   }
// ],