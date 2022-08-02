const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,

})
const hamza = 'name'

/* const 
const user = new User({
    name: 'hamza bashir malik              ',
     password:'passwd  ',
    email: 'Hamzajjmalik@gmail.com'
})

user.save().then(() => {
    console.log(user)
}).catch((error) => {
    console.log(error)
}) 

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    IsDone: {
        type: Boolean,
        default: false
    }


})
const task = new Task({
    description: "studying",
    IsDone: false

}) */