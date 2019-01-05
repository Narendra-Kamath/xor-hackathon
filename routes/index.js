const express = require('express')

const router = express()

const sampleEndPoint = require('./sample')

router.use('/sample', sampleEndPoint)

module.exports = router