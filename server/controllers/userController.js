const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../modals/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const OrderModel = require("../modals/orderModel")

const addUser = async (req, res) => {
  try {
    const newUser = await UserModel.create({
      // role_id: req.body.role_id
      user_name: req.body.user_name,
      email: req.body.email,
      role: req.body.role,
      user_contact: req.body.user_contact,
      user_address: req.body.user_address,
      password: req.body.password,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(401).json(error);
  }
};

// id: req.body.id,
// email: req.body.email,
// password: req.body.password,
// user_contact: req.body.user_contact,
// user_address: req.body.user_address,
// role_id: mongoose.Types.ObjectId(req.params.role_id.trim())

const getAllUser = async (req, res) => {
  try {
    const getUsers = await UserModel.find();
    res.status(201).json({ getUsers });
  } catch (error) {
    res.status(401).json(error);
  }
};

const signup = async (req, res) => {
  const hashedPaswword = bcrypt.hashSync(req.body.password, 8);

  try {
    const user = new UserModel({
      user_name: req.body.user_name,
      email: req.body.email,
      user_contact: req.body.user_contact,
      user_address: req.body.user_address,
      password: hashedPaswword,
    });
    const newUserData = await user.save();
    const order = new OrderModel({
      user_id: user._id,
      status: "pending",
      products: [],
    });
    const emptyOrder = await order.save();
    res.status(200).json({ newUserData, emptyOrder });
  } catch (error) {
    res.status(401).json(error);
  }
};

const signin = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      email: req.body.email,
    });

    // console.log(user, "User ");

    if (!user) {
      res.status(401).json({ message: "User doesn't exist." });
      return;
    }

    // console.log(req.body.password, user.password)
    // debugger

    const isValidPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isValidPassword) {
      res.status(401).json({ message: "Password doesn't match." });
      return;
    }

    const token = jwt.sign(
      {
        fullname: user.fullname,
        email: user.email,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "2h" }
    );

    res
      .status(200)
      .json({ message: "Successfully SignIn", token, role: user.role, id: user._id });
    return;
  } catch (error) {
    res.status(401).json(error);
    return;
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id, req.body, {
      new: true,
      // runValidators: true
    });
    res.status(201).json(deletedUser);
  } catch (error) {
    res.status(401).json(error);
  }
};

module.exports = {
  addUser,
  getAllUser,
  signup,
  signin,
  deleteUser,
};
