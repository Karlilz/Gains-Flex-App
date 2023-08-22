const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect(
    process.env.DATABASE_URL
);

mongoose.connection.on("connected", () => console.log("Mongoose Successfully Connected"));
mongoose.connection.on("error", () => console.log("Mongoose Connection Error"));

module.exports = mongoose;