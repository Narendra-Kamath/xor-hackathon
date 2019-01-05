var sequelize = require ('../config/connection.js');

module.exports = {
    searchMedicine: function(req, res){
        sequalize.query (
            "SELECT * FROM medicines where name like :name"
        , {
            replacements: { name: '%' + req.body.name + '%' },
            type: sequelize.QueryTypes.SELECT
        }).then(medicines => {
            return res.send({
                success: true,
                data: medicines
            })
        });
    }
}

