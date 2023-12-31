const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');
const User = require('../models/user');
const Schedule = require('../models/schedule');


// INDEX ROUTE
router.get('/schedule', async (req, res) => {
    let user = await User.findById(req.session.userId);
    let exerciseId = await Exercise.findById(req.body.id);
    let schedule = await Schedule.find().populate('exerciseId').populate('userId');
    console.log(schedule)
    console.log(exerciseId)
    res.render('schedule/index.ejs', {schedule, user, exerciseId});
});

// NEW ROUTE 
router.get("/schedule/new/:id", async (req, res) => {
    const exercise = await Exercise.findById(req.params.id)
    res.render("schedule/new.ejs", {exercise});
  });

// DELETE ROUTE 
router.delete('/schedule/:id', async (req, res) => {
        const deletedSchedule = await Schedule.findByIdAndRemove(req.params.id);
        if (!deletedSchedule) {
            return res.send('Schedule Not Found');
        }
        res.redirect('/schedule');
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

module.exports = router; 