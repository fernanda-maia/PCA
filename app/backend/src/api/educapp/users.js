const restful = require('node-restful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},

        username: {type: String, required: true},

        registration: {type: String, required: true},

        password: {type: String, required: true},

        email: {type: String, required: true},
        
        birthday: {type: Date, required: true}
    }
)

module.exports = restful.model('User', userSchema)