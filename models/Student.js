const {Schema, model} = require('mongoose');

const StudentSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = model('Student', StudentSchema);