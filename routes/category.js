const express = require('express')
const router = express.Router()
const controller = require('../controllers/category')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.patch('/:id', controller.patch)
router.delete('/:id', controller.remove)

module.exports = router