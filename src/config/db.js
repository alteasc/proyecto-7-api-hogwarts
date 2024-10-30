const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('BBDD funcionando correctamente ✅')
  } catch (error) {
    console.log('BBDD no conectada ❌')
  }
}

module.exports = { connectDB }
