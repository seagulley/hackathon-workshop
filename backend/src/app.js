const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')

const db = require('./db')
const productRoutes = require('./routes/ProductRoutes')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/products', productRoutes)

module.exports = app
