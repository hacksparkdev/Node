const express = require("express");
const app = express();

// This is the a route to localhost:8000/cats
app.get('/cats', (req, res) => {
    res.send("BITCH")
})

// This is the homee route localhost:8000 
app.get('/', (req, res) => {
  res.send('HOME')
})

app.listen(8000, () => {
  console.log("LISTENING ON PORT 800!!")
})
