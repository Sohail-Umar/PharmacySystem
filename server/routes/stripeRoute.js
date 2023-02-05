const express = require("express")
const stripeController = require("../controllers/stripeController")

const router = express.Router()


router.post("/charge", stripeController.stripeCharge);


module.exports = router