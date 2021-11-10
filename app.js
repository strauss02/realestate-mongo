const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

const URL = `mongodb+srv://ido:dozen12@cluster0.8yoes.mongodb.net/realestatedb?retryWrites=true&w=majority`

app.use(cors())
app.use(express.json())

mongoose.connect(URL, { useNewUrlParser: true }) //Check reason

app.get('/', (req, res) => {
  console.log(req)
  res.json('allah')
})

app.get('/cities', (req, res) => {
  console.log('yay')
  res.send('yay')
})

/* ====== Port ======= */
app.listen(8080, () => console.log('Server is up and running'))
