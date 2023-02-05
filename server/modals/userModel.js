const mongoose = require("mongoose")
const validate = require("validate")
// const Enum = require("enum")

const user = new mongoose.Schema({
  // id: {
  //   type: Number,
  //   required: true
  // },

  user_name: {
    type: String,
    required: [true, 'A User Name is required']
  },

  email: {
    type: String,
    // required: [true, 'An Email is required']
    // required: true
  },

  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer"
  },

  user_contact: {
    type: String,
    // required: [true, 'A Contact Num is required']
    // required: true
  },

  user_address: {
    type: String,
    // required: [true, 'A User Address is required']
    // required: true
  },

  password: {
    type: String,
    // required: [true, 'A Password is required']
    // required: true
  },

  created_at: {
    type: Date,
    default: Date.now()
  }

  // confirm_Password: {
  //   type: String,
  //   required: [true, 'Please Confirm Your Password'],
  //   validate: {
  //     validator: function (el) {
  //       return el === this.password
  //     },
  //     message: 'Passwords are not the same'
  //   }
  // }


  // role_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Roles"
  // }
})


module.exports = mongoose.model("UsersData", user)