const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise');
const { NONAME } = require('dns');

// INDEX ROUTE 
// app.get('/', async (req, res) => {
//     let exercises = await Exercise.find();
//     res.render('exercise/index.ejs', {exercises})
// });

// SEED ROUTE
router.get('/seed/exercise', async (req, res) => {
    await Exercise.deleteMany({});
    let seededExercises = await Exercise.create([
        {
            name: "Push-up",
            description: "A classic bodyweight exercise targeting the chest and arms. Start in a plank position and lower your body towards the ground, then push back up.",
            category: "Strength Training", 
            difficultyLevel: "Intermediate", 
            requiresEquipment: false,
        }
        {
            name: "Squat",
            description: "A fundamental lower body exercise to build leg strength. Stand with feet shoulder-width apart, bend your knees, and lower your hips as if sitting back into a chair.",
            category: "Strength Training",
            difficultyLevel: "Beginner",
            requiresEquipment: false,
        }
        {
            name: "Running"
            description: "Cardiovascular exercise that improves endurance. Run at a moderate pace for a certain distance or duration.",
            category: "Cardio",
            difficultyLevel: "Beginner",
            requiresEquipment: false,
        }
        {
            name: "Plank",
            description: "A core-strengthening exercise that involves holding a push-up position with your body in a straight line from head to heels.",
            category: "Core Training",
            difficultyLevel: "Beginner",
            requiresEquipment: false,
        }
        {
            name: "Lunges",
            description: "A core exercise that involves twisting your torso while bringing opposite elbow and knee together, simulating a cycling motion.",
            category: "Training",
            difficultyLevel: "Intermediate",
            requiresEquipment:false,
        }
        {
            name:"Bicycle Crunches",
            description: "A core exercise that involves twisting your torso while bringing opposite elbow and knee together, simulating a cycling motion.",
            category: "Core Training",
            difficultyLevel: "Intermediate",
            requiresEquipment:false,
        }
        {
            name:
            description:
            category:
            difficultyLevel:
            requiresEquipment:
        }
        {
            name:
            description:
            category:
            difficultyLevel:
            requiresEquipment:
        }
        {
            name:
            description:
            category:
            difficultyLevel:
            requiresEquipment:
        }
        {
            name:
            description:
            category:
            difficultyLevel:
            requiresEquipment:
        },
    ]);
    res.send(seededExercises);
});


// NEW ROUTE

// DELETE ROUTE 

// UPDATE ROUTE

// CREATE ROUTE 

// EDIT ROUTE

// SHOW ROUTE 

// module.exports = router; 