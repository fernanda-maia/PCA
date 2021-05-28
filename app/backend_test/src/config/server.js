const port = 8080

const bodyParser = require('body-parser')
const allowCors = require('./cors')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server