const mongoose = require('../database/connection');

const exerciseSchema = new mongoose.Schema ({
    name: String, 
    description: String, 
    category: String,
    difficultyLevel: String,
    requiresEquipment: Boolean, 
});

const Exercise = new mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise; 

