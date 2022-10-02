const express = require('express')

const diaryEntryController = require('../controllers/diaryEntryController')

const routes = express.Router()

routes.get('/', diaryEntryController.getAll)
routes.get('/:date', diaryEntryController.getItem)
routes.post('/', diaryEntryController.create)
routes.put('/:date', diaryEntryController.update)
routes.delete('/:date', diaryEntryController.delete)

module.exports = routes
