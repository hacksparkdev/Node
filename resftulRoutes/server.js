const express = require('express');
const app = express();

app.use(express.json()) // Request that come in are parsed as json 
app.use(express.urlencoded({ extended: true }));


app.get('/tacos', (req,res) => {
  res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
  const { meat, qty } = req.body; 
  res.send(`Here is your ${qty} ${meat} tacos `)
  console.log(req.body)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
