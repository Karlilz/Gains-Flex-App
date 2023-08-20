const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');
const User = require('../models/user');
const Schedule = require('../models/schedule');


// INDEX ROUTE
router.get('/schedule', async (req, res) => {
    let schedule = await Schedule.find();
    console.log(schedule);
    // res.render('schedule/index.ejs', {schedule});
});

// NEW ROUTE


// DELETE ROUTE 

//


// Order history for every sepecific user - have to be logged in to work
// router.get('/exercise/schedule', async (req, res) => {
//     const schedules = await Schedule.find({ userId: req.session.userId })
//         .populate("exercises")
//         .populate("userId");
//     res.render('schedule/index.ejs', { schedules });
// });

module.exports = router; 