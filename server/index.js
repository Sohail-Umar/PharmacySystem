const express = require("express")
const cors = require("cors");
require("dotenv").config()
const app = express()
const connectDatabase = require("./database/index")
const roleRoutes = require("./routes/roleRoute")
const productRoutes = require("./routes/productRoute")
const userRoutes = require("./routes/userRoute")
const categoryRoutes = require("./routes/categoryRoute")
const orderRoutes = require("./routes/orderRoute")


const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

connectDatabase()


app.use(express.json())
app.use(cors(corsOptions))
app.use("/role", roleRoutes)
app.use("/product", productRoutes)
app.use("/user", userRoutes)
app.use("/category", categoryRoutes)
app.use("/order", orderRoutes)


app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`)
})