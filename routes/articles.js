const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController')

router.get('/', articleController.getAllArticles)
router.post('/:authorId/:categoryId', articleController.uploadArticle)
router.patch('/:articleId', articleController.updateArticle)

module.exports = router