require('../src/db/mongoose')
const User = require("../src/models/user")

//62e5153f23c02f2e2171d099
/* User.findByIdAndUpdate('62e5153f23c02f2e2171d099', {
    age: 22
}).then((user) => {
    console.log(user)

    return User.countDocuments({
        age: 0
    })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
}) */ 


const UpdateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {
        age
    })
    const count = await User.countDocuments({
        age
    })
    return count
}
UpdateAgeAndCount('62e5153f23c02f2e2171d099', 32).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})