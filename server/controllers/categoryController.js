const CategoryModel = require("../modals/categoryModel")

const addCategory = async (req, res) => {

  // res.send("add category is working")
  try {
    const newCategory = await CategoryModel.create({
      category_name: req.body.category_name,
      description: req.body.description,
    })
    res.status(200).json(newCategory)
    return;
  } catch (error) {
    res.status(401).json(error)
    return
  }

}


const getAllCategory = async (req, res) => {
  try {
    const getCategory = await CategoryModel.find()
    res.status(201).json(getCategory)
    return
  } catch (error) {
    res.status(401).json(error)
    return
  }
}


const updateCategory = async (req, res) => {
  try {
    const updatedCategory = CategoryModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      upsert: true,
      // runValidators: true
    })
    res.status(201).json(updatedCategory)
    return
  } catch (error) {
    res.status(401).json({ "Not updated due to ": error })
    return
  }
}


const deleteCategory = async (req, res) => {
  console.log("params: ", req.params)
  try {
    const deletedCategory = await CategoryModel.findByIdAndDelete(req.params.id)
    res.status(201).json(deletedCategory)
  } catch (error) {
    res.status(401).json(error)
  }
}


module.exports = {
  addCategory, getAllCategory, updateCategory,
  deleteCategory
}