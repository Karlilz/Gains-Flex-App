const mongoose = require('../database/connection');

const workoutSchema = new mongoose.Schema ({
    name: String, 
    description: String, 
    date: Date, 
    reps: Number, 
    weight: Number, 
});

const Workout = new mongoose.model('Workout', workoutSchema);

module.exports = Workout; 

