const mongoose = require('../database/connection.js');

const userSchema = new mongoose.Schema ({
    name: String, 
    usernmae: String,
    password: String,
});

const User = new mongoose.model ('User', userSchema);

module.exports = User; 