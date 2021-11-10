const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const app = new express()

app.use(cors)

// mongoose.connect(URL, { useNewUrlParse: true }) //Check reason

app.get('http://localhost:8080/', (req, res) => {
  res.json('allah')
})

app.get('/cities', (req, res) => {
  console.log('yay')
  res.send('yay')
})

/* ====== Port ======= */
app.listen(8080, () => console.log('Server is up and running'))
