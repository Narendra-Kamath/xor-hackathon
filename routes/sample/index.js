const express = require('express')

const router = express.Router()

const smapleEndPoint = require('./sample-controller')

router.get('/add', smapleEndPoint.add)

module.exports = router