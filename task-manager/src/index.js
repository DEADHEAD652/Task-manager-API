const express = require('express')

require('./db/mongoose.js')
const User = require('./models/user.js')
const Task = require('./models/task.js')
const {
    response
} = require('express')
const app = express()
const port = process.env.port || 3000

app.use(express.json())


app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send()
    }



})


app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }




})


app.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        return res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }



})




app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(206).send(task)
    } catch (e) {
        res.status(400).send()
    }


    /* task.save().then(() => {
         res.status(206)
         res.send(task)
     }).catch((error) => {
         res.status(420)
         res.send(error)
     }) */


})
app.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }


})

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }

})





app.listen(port, () => {
    console.log('server is on port ' + port)
})