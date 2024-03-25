const mongoose = require('mongoose')
require('dotenv').config({path:"../.env"})
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_USER_PASS, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
