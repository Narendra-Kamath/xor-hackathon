require ('./sample/connection.js');

module.exports = (sequalize, SQ) => {
    const Subscriptions = sequalize.define('subscriptions', {
        id: {
            type: SQ.INTEGER
        },
        uid: {
            type: SQ.INTEGER
        },
        medicine_id: {
            type: SQ.INTEGER
        }
    });
    return Subscriptions;
}