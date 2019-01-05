const SQ = require('sequelize');

const sequelize = new SQ(
    'jeevani_db', 
    'postgres', 
    '12345678', {
        host: 'kochihackathon.ckryvnrnpxcr.us-east-2.rds.amazonaws.com',
        dialect: 'postgres',
    }
);
module.exports = sequelize;
