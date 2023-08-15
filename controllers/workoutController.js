const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');

// INDEX ROUTE 
app.get('/', async (req, res) => {
    let workouts = await Workout.find();
    res.render('workout/index.ejs', {workouts})
});

// NEW ROUTE


// DELETE ROUTE 

// UPDATE ROUTE

// CREATE ROUTE 

// EDIT ROUTE

// SHOW ROUTE 

module.exports = router; 