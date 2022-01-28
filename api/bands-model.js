const db = require('../data/dbConfig')

const getAll = () => {
    return db('bands')
}

const getById = (band_id) => {
    return db('bands').where({band_id}).first()
}

module.exports = {getAll, getById}