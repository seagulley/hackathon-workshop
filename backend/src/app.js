const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

// import router

const app = express()
dotenv.config()

// connect mongodb

app.use(cors())
app.use(express.json())

// setup router

module.exports = app
