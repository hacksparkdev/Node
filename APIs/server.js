const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

//Middleware
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


//Routes
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://zenquotes.io/api/quotes/')
    const quote = response.data;
    res.render('home', {quotes: quote});


  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('An error occured');
  }
})


//Port
app.listen(3000, () => {
  console.log("Listening on port: 3000")
})
