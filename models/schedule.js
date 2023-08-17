const mongoose = require('../database/connection.js');

const scheduleSchema = new mongoose.Schema ({
    userId:{ref: 'User', type: mongoose.Schema.Types.ObjectId},
    exerciseId:[{ref: 'Exercise', type: mongoose.Schema.Types.ObjectId}],
    scheduleName: String, 
    date: Date,
    reps: Number, 
    sets: Number,
    isComplete: Boolean,
});

const Schedule = new mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;