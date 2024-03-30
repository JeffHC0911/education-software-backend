const {Schema, model} = require('mongoose');

const SubjectSchema = Schema({
    name: {
        type: String,
        required: true
    },
    courses: {
        type: [Schema.Types.ObjectId],
        ref: 'Course',
        required: true
    }
})

module.exports = model('Subject', SubjectSchema);