const express = require('express')
const router = express.Router()
const articleController = require('../controllers/authorController')

router.post('/', articleController.addAuthor)

module.exports = router