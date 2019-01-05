const express = require('express')

const router = express.Router()

const smapleEndPoint = require('./sample-controller')

const medEndPoint = require('../../controller/MedicineController')

router.get('/add', smapleEndPoint.add)
router.get('/search', medEndPoint.search)

module.exports = router