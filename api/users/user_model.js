const db = require('../../data/dbconfig');

const getAll = () => {
    return db('users')
}

module.exports = {
    getAll,
}