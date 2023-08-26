
const PORT = 3000;

// Load express
const express = require('express');
const app = express();


app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine'));
// app.createEngine();






// Define a "root" route directly on app
app.get('/', (req, res) => {
	res.send('<h1>Welcome to the Pokemon App!</h1>');
	// res.render('Show')
});




// const fruits = ['apple', 'banana', 'pear'];

// app.get('/fruits/', (req, res) => {
//     res.send(fruits);
// });

// //add show route
// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.send(fruits[req.params.indexOfFruitsArray]);
// });



// const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter"];

// app.get('/:indexOfPlantsArray', (req, res) => {
//     res.send(plants[req.params.indexOfPlantsArray]);
// });




app.listen(3000, function () {
	console.log(`Listening on port ${PORT}`);
});