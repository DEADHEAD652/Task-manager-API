const express = require('express')

require('./db/mongoose.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.port || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('server is on port ' + port)
})
const jwt = require('jsonwebtoken')
const myFunction = async () =>{
    const token = jwt.sign( {  _id: '123'},'hhhh',{expiresIn: '2 second'})
    console.log(token)
   const data = jwt.verify(token,'hhhh')
   console.log(data)
}
myFunction()

const bcrypt = require('bcrypt')
