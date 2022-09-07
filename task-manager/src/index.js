const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const multer = require('multer')
const app = express()
const port = process.env.PORT || 3000


 const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload word document'))


        }
        cb(undefined, true)


    


    }


})
const errorMiddleware = (req,res,next) => {
    throw new Error('from my middelware')
}
app.post('/upload', errorMiddleware, (req, res) => {
    res.send()
}, (error,req,res,next) => { res.status(400).send({error:error.message})})




app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})