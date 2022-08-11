const mongoose = require('mongoose')
const validator = require('validator')

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