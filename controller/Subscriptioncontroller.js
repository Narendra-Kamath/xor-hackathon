let sequelize = require ('../config/connection.js');

module.exports = {
    updateSubscription: function(req, res){

    },
    createSubscription: function(req, res){

    },
    getSubscriptions: function(req, res){
        sequelize.query(
            "SELECT * from subscriptions where uid = ?"
        , {
            replacements: req.body.uid,
            type: sequelize.QueryTypes.SELECT
        }).then(subscriptions => {
            return res.send({
                success: true,
                data: subscriptions
            });
        })
    }
}