require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndDelete('62e50c0a9d9cb939533ab9f6').then((task) =>{
 console.log('id is removed successfully')
  
 return Task.find({IsDone : false})


}).then((complete) => {
    console.log(complete)
}).catch((e)=>{
    console.log(e)
})