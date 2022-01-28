const db = require('../data/dbConfig')

const getAll = () => {
    return db('bands')
}

module.exports = {getAll}