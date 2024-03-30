const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'The email is not valid']
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = model('User', UserSchema);