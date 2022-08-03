require('../src/db/mongoose')
const User = require("../src/models/user")

//62e5153f23c02f2e2171d099
User.findByIdAndUpdate('62e5153f23c02f2e2171d099', {
    age:22
}).then((user) => {
    console.log(user)

    return User.countDocuments({age:0})
}).then((result) => {
    console.log(result)
}).catch((e) =>{
    console.log(e)
})