const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User  = require('./models/user')
const main = async () => {
    // const task = await Task.findById('6309fe95ec0ff10661bfee52')
    // await task.populate('owner')
    // console.log(task.owner)
    const user = await User.findById('6309fda1460ee35fe8d9baaa')
    await user.populate('tasks')
    console.log(user.tasks)
}
main()