const express = require("express")
const userController = require("../controllers/userController")

const router = express.Router()

router.get("/getallusers", userController.getAllUser)

router.post("/addnewuser", userController.addUser)

router.post("/signup", userController.signup)

router.post("/signin", userController.signin)


module.exports = router