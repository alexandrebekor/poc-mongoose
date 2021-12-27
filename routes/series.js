const express = require('express')
const router = express.Router()
const controller = require('../controllers/series')
const model = require('../models/series')

router.get('/', controller.index.bind(null, model))
router.get('/:id/serie', controller.find.bind(null, model))
router.get('/create', controller.create)
router.post('/create', controller.store.bind(null, model))
router.get('/:id/edit', controller.edit.bind(null, model))
router.post('/:id/edit', controller.update.bind(null, model))
router.get('/:id/destroy', controller.destroy.bind(null, model))

module.exports = router