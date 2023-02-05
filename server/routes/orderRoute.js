const express = require("express")
const orderController = require("../controllers/orderController")

const router = express.Router()

router.post("/createorder", orderController.createOrder)

router.delete("/deleteorder/:id", orderController.deleteOrder)

router.get("/getcartorders", orderController.getPendingOrders)

router.post("/removefromcart", orderController.removeFromCart)

router.post("/addproductinorder", orderController.addProductinOrder)

// router.get("/:id", orderController.getProductbyid)

module.exports = router
