const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)

    const educappService =  require('../api/educapp/userService')
    educappService.register(router, '/users')
}