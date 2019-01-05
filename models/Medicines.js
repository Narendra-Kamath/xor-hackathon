require ('./sample/connection.js');

module.exports = (sequalize, SQ) => {
    const Medicine = sequalize.define('medicines', {
        id: {
            type: SQ.INTEGER
        },
        name: {
            type: SQ.STRING
        },
        desc: {
            type: SQ.STRING
        },
        manufacture_name: {
            type: SQ.STRING
        }
    });
    return Medicine;
}