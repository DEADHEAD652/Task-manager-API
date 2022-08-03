const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {


            resolve(a + b)
        }, 2000)

    })


}

/*add(1, 8).then((result) => {
    console.log(result)
    add(result, 6).then((result1) => {
        console.log(result1)
    }).catch((error) => {
        console.log(error)
    })
}).catch((error) => {
    console.log(error)

})*/
add(2, 2).then((result) => {
    console.log(result)
    return add(result, 5)

}).then((result1) => {
    console.log(result1)
}).catch((e) => {
    console.log(e)
})