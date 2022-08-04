require('../src/db/mongoose')
const Task = require('../src/models/task')


/* Task.findByIdAndDelete('62e50c0a9d9cb939533ab9f6').then((task) =>{
 console.log('id is removed successfully')
  
 return Task.find({IsDone : false})


}).then((complete) => {
    console.log(complete)
}).catch((e)=>{
    console.log(e)
}) */

const deleteTaskAndCount = async (id) =>{
 const task = await Task.findByIdAndDelete(id)
 const count = await Task.find({IsDone:false})
 return count


}
deleteTaskAndCount('62e98c57985b15c970dc2024').then((count) =>{
    console.log(count)
}).catch((error) => {
    console.log(error)
})