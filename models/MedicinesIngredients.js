require ('./sample/connection.js');

module.exports = (sequalize, SQ) => {
    const MedicinesIngredients = sequalize.define('medicines_ingredients_mapping', {
        id: {
            type: SQ.INTEGER
        },
        med_id: {
            type: SQ.INTEGER
        },
        ingredients_id: {
            type: SQ.INTEGER
        }
    });
    return MedicinesIngredients;
}