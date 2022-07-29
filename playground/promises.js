const promise = new Promise((resolve , reject) => { 
setTimeout( () => { 
    resolve([12,3,4])
} , 1000)



})

promise.then((result) => {
    console.log("Success" , result)
}).catch((error) => {
    console.log("error",error)
})
