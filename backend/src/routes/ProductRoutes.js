const express = require('express')

const productController = require('../controllers/ProductController')

const routes = express.Router()

routes.get('/', productController.getAll)
routes.get('/:id', productController.getItem)
routes.post('/', productController.create)
routes.put('/:id', productController.update)
routes.delete('/:id', productController.delete)

module.exports = routes
