const {Schema, model} = require('mongoose');

const CourseSchema = Schema({

    name: {
        type: String,
        required: true
    },

    schedule: {
        type: String,
        required: true
    },

    teacher: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        //required: true
    },

    students: {
        type: [Schema.Types.ObjectId],
        ref: 'Student',
        //required: true
    }
})

module.exports = model('Course', CourseSchema)