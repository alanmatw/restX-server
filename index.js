const express = require('express')

const app = express()
 
// base route
app.get('/', function (req, res) {
  res.send('Server is up!')
})

// initialize server
app.listen(process.env.port || 3000, () => {
  console.log("Server running at port 3000")
})