const express = require('express')

const router = express.Router()

router.get('./', (req, res) => {
    res.json({mssg: 'GET all workout'})
})

router.get('./:id', (res, req) => {
    res.json({mssg: 'GET a single workout'})
})

router.post('/')

module.exports = router