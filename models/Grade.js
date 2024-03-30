const {Schema, model} = require('mongoose');

const GradeSchema = Schema({
    value:{
        type: Number,
        required: true
    },

    student:{
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    }
})

module.exports = model('Grade', GradeSchema);