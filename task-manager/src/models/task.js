const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    description: {
        trim : true,
        required: true,
        type: String


    },
    IsDone: {

        type: Boolean,
        defualt: false


    }





})



module.exports = Task