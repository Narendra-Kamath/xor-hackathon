require ('./sample/connection.js');

module.exports = (sequalize, SQ) => {
    const Ingredients = sequalize.define('ingredients', {
        id: {
            type: SQ.INTEGER
        },
        name: {
            type: SQ.STRING
        }
    });
    return Ingredients;
}