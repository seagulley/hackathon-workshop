const express = require('express')

const productController = require('../controllers/ProductController')

const routes = express.Router()

routes.post('/', productController.create)

module.exports = routes
