const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static('public'));


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/random', (req, res) => {
  const num = Math.floor(Math.random() * 10)
  res.render('random', {rand: num})
})

app.get('/r/:subreddit', (req, res) => {
  const {subreddit} = req.params
  const data = redditData[subreddit];
  res.render('subreddit', { ...data })
})

app.get('/cats', (req, res) => {
  const cats = ['fat whore', 'simon', 'sam', 'dean']
  res.render('cats', {cats})
})

app.listen(3000, () => {
  console.log("Listening on port 3000!!!")
})
