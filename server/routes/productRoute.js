const express = require("express")
const productController = require("../controllers/productController")

const router = express.Router()

router.get("/getallproducts", productController.getAllProducts)

router.get("/:id", productController.getProductbyid)

router.post("/addnewproduct", productController.addProduct)

router.put("/updateproduct/:id", productController.updateProducts)

router.delete("/deleteproduct/:id", productController.deleteProduct)

module.exports = router
