const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://guthulahemasri410:Hemasri1709@cluster0.tfekj.mongodb.net/live-session")
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error.message);
        
    }
};

module.exports = connectDB;