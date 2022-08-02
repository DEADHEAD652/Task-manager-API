const express = require('express')

require('./db/mongoose.js')
const User = require('./models/user.js')
const Task = require('./models/task.js')
const app = express()
const port = process.env.port || 3000

app.use(express.json())

app.post('/tasks',(req,res) =>{
 const task = new Task(req.body)
 task.save().then(() => {
    res.status(206)
    res.send(task)
 }).catch((error) => {
    res.status(400)
    res.send(error)
 }) 


})
/* app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
    }).catch((error) =>{
        res.status(400)
        res.send(error)   })


}) */




app.listen(port, () => {
    console.log('server is on port ' + port)
})