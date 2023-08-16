const mongoose = require('mongoose')

mongoose.connect(
    'mongodb+srv://klazarte:KLxmongoDB@sei.2c3lyiq.mongodb.net/GainFlex-Tracker-App'
);

mongoose.connection.on("connected", () => console.log("Mongoose Successfully Connected"));
mongoose.connection.on("error", () => console.log("Mongoose Connection Error"));

module.exports = mongoose;