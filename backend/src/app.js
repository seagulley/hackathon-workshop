const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')

const db = require('./db')
// import routes //

const app = express()
app.use(cors())
app.use(express.json())

// setup routes //

module.exports = app
