const mongoose = require('../database/connection.js');

const workoutSchema = new mongoose.Schema ({
    name: String, 
    date: Date,
    reps: Number, 
    sets: Number,
    isComplete: Boolean,
});

const Workout = new mongoose.model ('Workout', workoutSchema);

module.exports = Workout;