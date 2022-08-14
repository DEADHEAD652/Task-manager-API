const express = require('express')

require('./db/mongoose.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.port || 3000
//const allowedMethods = ['HEAD', 'POST']
/*app.use((req, res, next) => {

if (req.method === 'GET') {
    res.send('Method Not Allowed')
} else {
    next()
}
}) */
app.use((req, res, use) => {
    if (req.method) {


        res.send('site under construction')
        res.status(503)
        return use()
    }

})
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('server is on port ' + port)
})




const bcrypt = require('bcrypt')