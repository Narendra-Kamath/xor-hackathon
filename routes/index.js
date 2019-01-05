const express = require('express')

const router = express.Router()

const medicineController = require ('../controller/MedicineController')
const ingredientsController = require ('../controller/IngredientsController')

router.get('/searchMedicine', medicineController.searchMedicine)
router.post('/getIngredients', ingredientsController.getIngreditentsForMedicine)

module.exports = router