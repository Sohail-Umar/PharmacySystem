const mongoose = require("mongoose")

const connectDatabase = async () => {
  mongoose.set('strictQuery', false);
  const databaseInfo = await mongoose.connect(process.env.DATABASE_URL)

  console.log(`DB connect at port ${databaseInfo}`)
}


module.exports = connectDatabase