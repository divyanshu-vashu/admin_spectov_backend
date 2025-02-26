const mongoose = require("mongoose");
require('dotenv').config();

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(process.env.MONGO_URI, connectionParams);
        console.log("Connected to database successfully");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to the database!");
    }
};
