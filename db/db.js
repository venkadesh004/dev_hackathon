const mongoose = require('mongoose');

const connectDB = async() => {
    const dbURL = "mongodb+srv://venkadesh:venkadesh@db.dwfot2x.mongodb.net/?retryWrites=true&w=majority";

    await mongoose.connect(dbURL, (err) => {
        if (err) {
            console.log(`MongoDB connection failed! ${err}`);
            return;
        } else {
            console.log(`MongoDB connection was successfull!`);
            return;
        }
    });
};

module.exports = connectDB;