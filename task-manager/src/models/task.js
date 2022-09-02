const mongoose = require('mongoose')
const validator = require('validator')

const TaskSchema = new mongoose.Schema({
    description: {
        trim: true,
        required: true,
        type: String


    },
    IsDone: {

        type: Boolean,
        default:false


    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

/*const Task = mongoose.model('Task', {
    description: {
        trim : true,
        required: true,
        type: String


    },
    IsDone: {

        type: Boolean,
        defualt: false


    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    }





})*/


const Task = mongoose.model('Task', TaskSchema)
module.exports = Task