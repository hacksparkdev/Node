const express = require('express');
const app = express();



app.use(express.static('public'));

app.set('view engine', 'ejs');

app.set('view', path.join(__dirname, '/views'))



app.get('/', (req, res) => {
  res.render('home')
})


app.listen(3000, () => {
  console.log('Running on port 3000')
})
