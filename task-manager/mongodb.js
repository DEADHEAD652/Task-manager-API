//CRUD operations
//const mongodb = require('mongodb')
//const MongoClient = mongodb.MongoClient
//const ObjectID = mongodb.ObjectId
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const{MongoClient , ObjectID, ObjectId} = require('mongodb')


MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('unable to connect to database!')
    }
    const db = client.db(databaseName)
   /* db.collection('users').findOne({_id : '62e1a38394cba7184542e072'}, (error,user) =>{
        if(error){
        return    console.log('rror')
        }
        console.log(user)

    }) */

   /* db.collection('users').find({age:22}).toArray((error,users) => {
        console.log(users)
    })*/

    db.collection('tasks').findOne({_id :new ObjectId('62e1a38394cba7184542e072')}, (error, user) => {
        if(error){
            return console.log('Error!!')
        }
        console.log( user)
    })

    db.collection('tasks').find({IsDone : false}).toArray((error,users) => {
         console.log( users)
    })

  


}) 