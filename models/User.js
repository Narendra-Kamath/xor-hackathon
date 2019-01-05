var sequelize = require ('../config/connection.js');

module.exports = (sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: SQ.INTEGER
        },
        name: {
            type: SQ.STRING
        },
        password: {
            type: SQ.STRING
        },
        email: {
            type: SQ.STRING
        },
        phone: {
            type: SQ.STRING
        }
    });
    return User;
}