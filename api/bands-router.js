const router = require('express').Router()
const Band = require('./bands-model')

router.get('/', (req, res, next) => {
    return Band.getAll()
        .then(bands => {
            res.status(200).json(bands)
        })
        .catch(err => next(err))
})


module.exports = router