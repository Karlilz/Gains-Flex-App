// const express = require('express');
// const router = express.Router();
// const Exercise = require('../models/exercise');

// SEED ROUTER - copied from coffee index 
// router.get('/seed', async (req, res) => {
//     await Coffee.deleteMany({}); //deletes all the coffees added during TEST run
//     let seededCoffees = await Coffee.create([
//         { 
//             name: 'Carmel Frap', 
//             description: "A cold sweet carmely goodness",            
//             image: "https://simplyhomecooked.com/wp-content/uploads/2021/02/Starbucks-Caramel-Frappuccino-Copycat-recipe-11.jpg",            
//             price: '8', 
//             isColdDrink: true,
//         },
//         { 
//             name: 'Mocha Frap',
//             description: "A cold sweet chocolatey goodness",            
//             image: "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190528_MochaFrapp.jpg?impolicy=1by1_wide_topcrop_630",            
//             price: '8', 
//             isColdDrink: true,
//         },
//         { 
//             name: 'Carmel Latte',
//             description: "A host sweet carmely hot drink",            
//             image: "https://www.forkinthekitchen.com/wp-content/uploads/2022/06/220518.homemade.caramel.latte-6630.jpg",            
//             price: '8', 
//             isColdDrink: true,
//         },
//     ]);
//     res.send(seededCoffees);
// });