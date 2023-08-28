
const PORT = 3000;

const express = require('express');
const app = express();

// middleware
app.set('view engine', 'jsx')
app.engine( 'jsx', require('express-react-views').createEngine() )


const pokemon = require('./models/pokemon');

app.get('/', (req, res) => {
	res.send("<h1>Welcome to the Pokemon App</h1>")
})

app.get('/pokemon', (req, res) => {
	// res.send(pokemon)
	res.render('Index')
})

app.get('/pokemon/:id', (req, res) => {
	// res.send(req.params.id);	
	res.render('Show', {id: req.params.id})
})





app.listen( PORT, ( req, res ) => {
	console.log(`Server is running on port ${PORT}`)
} )
