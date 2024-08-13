const express = require("express");

const app = express()


app.use((req, res) => {
 
  // This Creates texts on the screen
  res.send('This is a http response')
})

app.listen(3000, ()  => {
  console.log("Listening on port 3000!")
})




