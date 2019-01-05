let sequelize = require ('../config/connection.js');

module.exports = {
    getIngreditentsForMedicine: function(req, res){
        sequelize.query(
            "SELECT * FROM medicines_ingredients_mapping where medicine_id = ?",
            {   
                replacements: req.query.medicineId,
                type: sequelize.QueryTypes.SELECT
            }
        ).then(ingredients => {
            return res.send({
                success: true,
                data: ingredients
            })
        });
    }
}
