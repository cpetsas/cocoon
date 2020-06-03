var express = require('express')
var router = express.Router();

router.use('/articles', require('./articles'))
router.use('/authors', require('./authors'))
router.use('/categories', require('./categories'))

module.exports = router