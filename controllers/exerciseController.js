const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');
const Schedule = require('../models/schedule');

// INDEX ROUTE 
router.get('/exercise', async (req, res) => {
    let exercise = await Exercise.find();
    res.render('exercise/index.ejs', {exercise});
});

// SEED ROUTE
router.get('/exercise/seed', async (req, res) => {
    await Exercise.deleteMany({});
    let seededExercises = await Exercise.create([
        {
            name: "Push-up",
            description: "A classic bodyweight exercise targeting the chest and arms. Start in a plank position and lower your body towards the ground, then push back up.",
            category: "Strength Training", 
            difficultyLevel: "Intermediate", 
            requiresEquipment: false,
            image: "images/push-up.png",
        },
        {
            name: "Squat",
            description: "A fundamental lower body exercise to build leg strength. Stand with feet shoulder-width apart, bend your knees, and lower your hips as if sitting back into a chair.",
            category: "Strength Training",
            difficultyLevel: "Beginner",
            requiresEquipment: false,
            image: "images/squat.png",
        },
        {
            name: "Kettlebell Swing",
            description: "A dynamic full-body exercise that involves swinging a kettlebell between your legs and then up to chest height using a hip hinge motion.",
            category: "Cardio",
            difficultyLevel: "Intermediate",
            requiresEquipment: true,
            image: "images/kettlebell-swing.png",
        },
        {
            name: "Plank",
            description: "A core-strengthening exercise that involves holding a push-up position with your body in a straight line from head to heels.",
            category: "Core Training",
            difficultyLevel: "Beginner",
            requiresEquipment: false,
            image: "images/plank.png",
        },
        {
            name: "Lunges",
            description: "A core exercise that involves twisting your torso while bringing opposite elbow and knee together, simulating a cycling motion.",
            category: "Strength Training",
            difficultyLevel: "Intermediate",
            requiresEquipment:false,
            image:"images/lunges.png",
        },
        {
            name:"Bench Press",
            description: "A classic weightlifting exercise targeting the chest, shoulders, and triceps. Lie on a bench and lift a barbell from a rack, lowering it to your chest and pressing it back up.",
            category: "Strength Training",
            difficultyLevel: "Intermediate",
            requiresEquipment:true,
            image: "images/bench-press.png",
        },
        {
            name:"Mountain Climbers",
            description: "A full-body exercise that mimics climbing. Start in a plank position and alternate bringing your knees towards your chest in a running motion.",
            category: "Cardio",
            difficultyLevel: "Intermediate",
            requiresEquipment: false,
            image: "images/mountain-climber.png",
        },
        {
            name: "Pull-up",
            description: "An upper body exercise that targets the back and arms. Hang from a bar and pull your body up until your chin is above the bar.",
            category: "Strength Training",
            difficultyLevel: "Advanced",
            requiresEquipment: true,
            image: "images/pull-up.png",
        },
        {
            name: "Yoga Downward Dog",
            description: "A yoga pose that stretches the entire body. Start in a plank position, then lift your hips up and back, forming an inverted V shape.",
            category: "Flexibility",
            difficultyLevel: "Beginner",
            requiresEquipment: false,
            image: "images/downward-dog.png",
        },
        {
            name: "Dumbbell Shoulder Press",
            description: "A weightlifting exercise targeting the shoulders. Hold a dumbbell in each hand at shoulder height, then press them overhead.",
            category: "Strength Training",
            difficultyLevel: "Intermediate",
            requiresEquipment: true, 
            image: "images/shoulder-press.png",
        },
    ]);
    res.send(seededExercises);
});


// NEW ROUTE - add new exercise 
router.get("/exercise/new", async (req, res) => {
    res.render("exercise/new.ejs");
  });

// DELETE ROUTE - delete exercise 
router.delete('/exercise/:id', async (req, res) => {
    let deletedExercise = await Exercise.findByIdAndDelete(req.params.id)
    res.redirect('/exercise')
}); 

// UPDATE ROUTE - post edited exercise 
router.put('exercise/:id', async (req, res) => {

});

// CREATE ROUTE - post new exercise
router.post('/exercise', async (req, res) => {
    req.body.user = req.session.userId
    let newExercise = await Exercise.create(req.body);
    console.log(req.session.userId);
    res.redirect('/exercise');
});

// EDIT ROUTE - edit exercise 
router.get('/exercise/:id/edit', async (req, res) => {
    let foundExercise = await Exercise.findById(req.params.id);
    res.render('exercise/update.ejs', {exercise});
});

// SHOW ROUTE - exercise details 
router.get('/exercise/:id', async (req, res) => {
    const id = req.params.id;
    const foundExercise = exercise.find(({ id }) => id === req.params.id);
    res.render('show.ejs', {
        exercise: foundExercise,
    });
});

module.exports = router; 