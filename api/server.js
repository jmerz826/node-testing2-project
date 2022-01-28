const express = require('express')
const bandsRouter = require('./bands-router')

const server = express()

server.use(express.json())

server.use('/api/bands', bandsRouter)

server.use('/', (err, req, res, next) => { //eslint-disable-line
    res.json({status: 500, message: err.message, stack: err.stack})
})

module.exports = server