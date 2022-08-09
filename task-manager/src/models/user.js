const mongoose = require('mongoose')
const validator = require('validator')   
const userSchema = new mongoose.Schema({})


const User = mongoose.model('User', {
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
        minlength: 7,
        validate(value) {
            if (value == 'password') {
                throw new Error(value + ' can not be password')
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

module.exports = User