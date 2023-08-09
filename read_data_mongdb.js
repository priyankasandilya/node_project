// const {MongoClient}=require('mongodb')
// const url = 'mongodb://0.0.0.0:27017'
// const client = new MongoClient(url)
// const database = 'node-tut'

// async function dbConnect(){
//     let result = await client.connect()
//     db = result.db(database)
//     return db.collection('products')
// }
const dbConnect = require('./dbConnectMain')
//--------promise and then---------------
dbConnect().then((resp)=>{
    resp.find({name:'iphone-13'}).toArray().then((datas)=>{
        console.log(datas)
    })
})

//------------Async await--------
const main = async ()=>{
    let data = await dbConnect()
    data = await data.find({name:"cord"}).toArray()
    console.log(data)
}
main()