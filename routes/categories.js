const express = require('express')
const router = express.Router()
const articleController = require('../controllers/categoryController')

router.post('/', articleController.addACategory)

module.exports = router