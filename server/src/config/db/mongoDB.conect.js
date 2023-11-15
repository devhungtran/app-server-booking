const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

const connectMongo = async () => {
    try {
      await mongoose.connect(process.env.URIMONGO);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB Connection Error:', error);
    }
  };
  

module.exports = { connectMongo };
