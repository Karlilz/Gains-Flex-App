const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');
const User = require('../models/user');
const Schedule = require('../models/schedule');


// INDEX ROUTE
router.get('/schedule', async (req, res) => {
    let user = await User.findById(req.session.userId);
    let schedule = await Schedule.find().populate('exerciseId').populate('userId');
    // console.log(schedule);
    res.render('schedule/index.ejs', {schedule, user});
});

// NEW ROUTE 
router.get("/schedule/new/:id", async (req, res) => {
    const exercise = await Exercise.findById(req.params.id)
    res.render("schedule/new.ejs", {exercise});
  });

// DELETE ROUTE 
router.delete('/schedule/:id', async (req, res) => {
    try {
        const deletedSchedule = await Schedule.findByIdAndRemove(req.params.id);
        if (!deletedSchedule) {
            return res.send('Schedule Not Found');
        }
        res.redirect('/schedule');
    } catch (error) {
        // console.error("Error:", error);
        res.send('An Error Occurred While Deleting the schedule');
    }
});

// UPDATE ROUTE 
router.put('/schedule/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const updatedValues = {
        scheduleName: body.scheduleName,
        date: body.date,
        reps: body.reps,
        sets: body.sets,
        
    };
    const updatedSchedule = await Schedule.findOneAndUpdate({_id:id}, updatedValues);
    res.redirect('/schedule');
});

// CREATE ROUTE
router.post('/schedule', async (req, res) => {
    req.body.userId = req.session.userId;
    await Schedule.create(req.body);
    res.redirect('/schedule'); 
  });

// EDIT ROUTE
router.get('/schedule/:id/edit', async (req, res) => {
    const foundSchedule = await Schedule.findById(req.params.id);
    res.render('schedule/edit.ejs', {
        schedule: foundSchedule,
    });
});

// // SHOW ROUTE 
// router.get('/schedule/:id', async (req, res) => {
//     const foundSchedule = await Schedule.findById(req.params.id)
//     res.render('schedule/show.ejs', {
//         schedule: foundSchedule,
//     })
// });

// // Order history for every sepecific user - have to be logged in to work
// router.get('/exercise/schedule', async (req, res) => {
//     const schedules = await Schedule.find({ userId: req.session.userId })
//         .populate("exercises")
//         .populate("userId");
//     res.render('schedule/index.ejs', { schedules });
// });

module.exports = router; 