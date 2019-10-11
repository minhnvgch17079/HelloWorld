const express = require('express')
const  app = express()
const helmet = require('helmet')

app.listen(3000, (req, res) => {
    console.log('ok babay')
})

app.get('/', (req, res) => {
    res.send('OK')
})