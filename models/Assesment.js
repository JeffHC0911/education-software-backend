const {Schema, model} = require('mongoose');

const AssesmentSchema = Schema({
    name:{
        type: String,
        required: true
    },

    weighted:{
        type: Number,
        required: true
    },

    course:{
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    grades:{
        type: [Schema.Types.ObjectId],
        ref: 'Grade',
        //required: true
    
    }
})

module.exports = model('Assesment', AssesmentSchema);