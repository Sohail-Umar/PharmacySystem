const express = require("express")
// const { findByIdAndUpdate, findById, findByIdAndDelete } = require("../modals/productModel")
const ProductModel = require("../modals/productModel")

const addProduct = async (req, res) => {

  try {
    const newProduct = await ProductModel.create({
      id: req.body.id,
      product_name: req.body.product_name,
      description: req.body.description,
      stock: req.body.stock,
      price: req.body.price,
      category_id: req.body.category_id
    })
    res.status(200).json(newProduct)
    return;
  } catch (error) {
    res.status(401).json(error)
    return
  }

}


const getProductbyid = async (req, res) => {
  try {
    const productOnId = await ProductModel.findById(req.params.id)
    // .populate('category_id', 'category_name')
    // const productOnId = await ProductModel.findOne({ _id: req.param.id })

    res.status(202).json(productOnId)
    return
  } catch (error) {
    res.status(401).json({ "Record doesn't exist ": error })
    return
  }
}


const getAllProducts = async (req, res) => {
  try {
    const getproducts = await ProductModel.find().populate('category_id', 'category_name')
    // const getproducts = await ProductModel.find().populate({
    //   path: "category",
    //   model: "Category",
    //   select: "category_name",
    // })
    // console.log("get all products working")
    const data = getproducts
    // console.log("data", data)
    res.status(201).send(data)
    return
  } catch (error) {
    res.status(401).json(error)
    return
  }
}


const updateProducts = async (req, res) => {
  try {
    // console.log("body", req.body)
    // console.log("params", req.params.id)
    const updatedprod = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      upsert: true,
      // runValidators: true
    })
    res.status(201).json(updatedprod)
    return
  } catch (error) {
    res.status(401).json({ "Not updated due to ": error })
    return
  }
}

const deleteProduct = async (req, res) => {
  try {
    const deletedprod = await ProductModel.findByIdAndDelete(req.params.id, req.body)
    res.status(201).json(deletedprod)
  } catch (error) {
    res.status(401).json(error)
  }
}



module.exports = {
  addProduct, getAllProducts, updateProducts,
  getProductbyid, deleteProduct
}