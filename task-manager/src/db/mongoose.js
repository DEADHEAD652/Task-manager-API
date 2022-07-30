const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,

})


/* const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        },
        trim: true,
        lowercase: true

    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: 7,
        validate(value){
            if(value == 'password'){
                throw new Error( value+' can not be password')
            }
        }




    },

    age: {
        type: Number,
        default: 0,

        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive number')
            }
        }
    }
})
const user = new User({
    name: 'hamza bashir malik              ',
     password:'passwd  ',
    email: 'Hamzajjmalik@gmail.com'
})

user.save().then(() => {
    console.log(user)
}).catch((error) => {
    console.log(error)
}) */

 const Task = mongoose.model('Task' ,{
description : {
    type:String,
    required:true,
    trim:true
},
IsDone:{
    type:Boolean,
    default:false
}

    
})
const task = new Task({
description : "studying",
IsDone:false
    
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
}) 