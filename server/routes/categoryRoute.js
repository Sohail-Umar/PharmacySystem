const express = require("express")
const categoryController = require("../controllers/categoryController")

const router = express.Router()

router.get("/getallcategory", categoryController.getAllCategory)

router.post("/addnewcategory", categoryController.addCategory)

router.put("/updatecategory/:id", categoryController.updateCategory)

router.delete("/deletecategory/:id", categoryController.deleteCategory)

// router.get("/:id", categoryController.getProductbyid)

module.exports = router
