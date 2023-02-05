const express = require("express")
const roleController = require("../controllers/roleController")

const router = express.Router()

router.get("/getallroles", roleController.getAllRole)

router.post("/addnewrole", roleController.addRole)


module.exports = router