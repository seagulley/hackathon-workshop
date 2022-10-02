const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')

const db = require('./db')
const diaryRoutes = require('./routes/diaryRoutes')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/diaryentry', diaryRoutes)

module.exports = app
