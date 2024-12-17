// /backend/config/db.js
const mongoose = require('mongoose');

mongoose.set('strictPopulate', false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI||"mongodb://localhost:27017/sportsapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
