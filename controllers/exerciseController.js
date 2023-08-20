const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Exercise = require('../models/exercise');
const Schedule = require('../models/schedule');

const methodOverride = require("method-override")
router.use(methodOverride('_method'))

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
            requiresEquipment: "None",
            image: "images/push-up.png",
        },
        {
            name: "Squat",
            description: "A fundamental lower body exercise to build leg strength. Stand with feet shoulder-width apart, bend your knees, and lower your hips as if sitting back into a chair.",
            category: "Strength Training",
            difficultyLevel: "Beginner",
            requiresEquipment: "None",
            image: "images/squat.png",
        },
        {
            name: "Kettlebell Swing",
            description: "A dynamic full-body exercise that involves swinging a kettlebell between your legs and then up to chest height using a hip hinge motion.",
            category: "Cardio",
            difficultyLevel: "Intermediate",
            requiresEquipment: "Kettlebell",
            image: "images/kettlebell-swing.png",
        },
        {
            name: "Plank",
            description: "A core-strengthening exercise that involves holding a push-up position with your body in a straight line from head to heels.",
            category: "Core Training",
            difficultyLevel: "Beginner",
            requiresEquipment: "None",
            image: "images/plank.png",
        },
        {
            name: "Lunges",
            description: "A core exercise that involves twisting your torso while bringing opposite elbow and knee together, simulating a cycling motion.",
            category: "Strength Training",
            difficultyLevel: "Intermediate",
            requiresEquipment: "None",
            image:"images/lunges.png",
        },
        {
            name:"Bench Press",
            description: "A classic weightlifting exercise targeting the chest, shoulders, and triceps. Lie on a bench and lift a barbell from a rack, lowering it to your chest and pressing it back up.",
            category: "Strength Training",
            difficultyLevel: "Intermediate",
            requiresEquipment:"Bench",
            image: "images/bench-press.png",
        },
        {
            name:"Mountain Climbers",
            description: "A full-body exercise that mimics climbing. Start in a plank position and alternate bringing your knees towards your chest in a running motion.",
            category: "Cardio",
            difficultyLevel: "Intermediate",
            requiresEquipment: "None",
            image: "images/mountain-climber.png",
        },
        {
            name: "Pull-up",
            description: "An upper body exercise that targets the back and arms. Hang from a bar and pull your body up until your chin is above the bar.",
            category: "Strength Training",
            difficultyLevel: "Advanced",
            requiresEquipment: "Pull-up bar",
            image: "images/pull-up.png",
        },
        {
            name: "Yoga Downward Dog",
            description: "A yoga pose that stretches the entire body. Start in a plank position, then lift your hips up and back, forming an inverted V shape.",
            category: "Flexibility",
            difficultyLevel: "Beginner",
            requiresEquipment: "None",
            image: "images/downward-dog.png",
        },
        {
            name: "Dumbbell Shoulder Press",
            description: "A weightlifting exercise targeting the shoulders. Hold a dumbbell in each hand at shoulder height, then press them overhead.",
            category: "Strength Training",
            difficultyLevel: "Intermediate",
            requiresEquipment: "Dumbbell", 
            image: "images/shoulder-press.png",
        },
        {
            name: "Jump Roping",
            description: "A cardiovascular exercise using a jump rope. Swing the rope over your head and jump over it with each rotation. Keep a steady rhythm.",
            category: "Cardiovascular",
            difficultyLevel: "Beginner",
            requiresEquipment: "Jump Rope",
            image: "images/jump-rope.png"
          },
          {
            name: "Hamstring Stretch",
            description: "A flexibility exercise that targets the muscles in the back of your thighs. Sit on the floor with one leg extended straight and the other leg bent. Reach towards your extended foot while keeping your back straight.",
            category: "Flexibility",
            difficultyLevel: "Beginner",
            requiresEquipment: "None",
            image: "images/hamstring-stretch.png"
          },
    ]);
    res.send(seededExercises);
});


// NEW ROUTE 
router.get("/exercise/new", async (req, res) => {
    res.render("exercise/new.ejs");
  });

// DELETE ROUTE 
router.delete('/exercise/:id', async (req, res) => {
    try {
        const deletedExercise = await Exercise.findByIdAndRemove(req.params.id);
        if (!deletedExercise) {
            return res.send('Exercise Not Found');
        }
        res.redirect('/exercise');
    } catch (error) {
        console.error("Error:", error);
        res.send('An Error Occurred While Deleting the Exercise');
    }
});

// UPDATE ROUTE 
router.put('/exercise/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const updatedValues = {
        name: body.name,
        description: body.description,
        category: body.category,
        difficultyLevel: body.difficultyLevel,
        requiresEquipment: body.requiresEquipment,
        image: body.image,
    };
    const updatedExercise = await Exercise.findOneAndUpdate({_id:id}, updatedValues);
    res.redirect('/exercise');
});

// CREATE ROUTE
router.post('/exercise', async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    let newExercise = new Exercise({
        name: body.name,
        description: body.description,
        category: body.category,
        difficultyLevel: body.difficultyLevel,
        requiresEquipment: body.requiresEquipment,
        image: body.image,
      });
      await newExercise.save();
      res.redirect('/exercise'); 
  });


// EDIT ROUTE
router.get('/exercise/:id/edit', async (req, res) => {
    const foundExercise = await Exercise.findById(req.params.id)
    res.render('exercise/edit.ejs', {
        exercise: foundExercise,
    });
});

// SHOW ROUTE 
router.get('/exercise/:id', async (req, res) => {
    const foundExercise = await Exercise.findById(req.params.id)
    res.render('exercise/show.ejs', {
        exercise: foundExercise,
    })
});

module.exports = router; 