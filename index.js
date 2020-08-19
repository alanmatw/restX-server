const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
 
// base route
app.get('/', function (req, res) {
  res.send('Server is up!')
})

// middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

// initialize server
app.listen(process.env.port || 3000, () => {
  console.log("Server running at port 3000")
})