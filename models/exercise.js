const mongoose = require('../database/connection');

const exerciseSchema = new mongoose.Schema ({
    name: String, 
    description: String, 
    image: String,
    category: String,
    difficultyLevel: String,
    requiresEquipment: String, 
});

const Exercise = new mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise; 

