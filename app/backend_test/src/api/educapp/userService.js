const users = require('./users')

users.methods(['get', 'post', 'put', 'delete'])
users.updateOptions({new: true, runValidators: true})

module.exports = users