const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');
const User = require('../models/user');
const Schedule = require('../models/schedule');

router.post('/exercise/schedule', async (req, res) => {
    // console.log(req.body);
    let exercises = await Exercise.find({_id: {$in: req.body.exercises}})
    console.log(exercises);

    // let newSchedule = await Schedule.create(req.body);

    // req.json(newSchedule);
});

// workout history for every sepecific user - have to be logged in to work
// router.get('/workout/order', async (req, res) => {
//     const workouts = await Workout.find({ userId: req.session.userId }) 
//         .populate("exercises")
//         .populate("userId");
//     res.render('workout/index.ejs', { workouts });
// });