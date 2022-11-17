const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const indexRouter = require('./routes/index')

const mongoDB = process.env.MONGO_URI

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const app = express()
const port = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})
app.use(cors())

app.use('/', indexRouter)
app.listen(port, () => `Server running on port ${port}`)

module.exports = app
