const express = require('express')

const router = express.Router()

const smapleEndPoint = require('./sample-controller')
const medicineController = require ('../../controller/MedicineController')
const ingredientsController = require ('../../controller/IngredientsController')

router.get('/add', smapleEndPoint.add)
router.post('/searchMedicine', medicineController.searchMedicine)
router.post('/getIngredients', ingredientsController.getIngreditentsForMedicine)

module.exports = router