const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url)
const databasename = 'node-tut'

async function getData(){
    //connection between node js and mongoDB----
    let result= await client.connect();
    db = result.db(databasename)
    collection = db.collection('products')
    let data = await collection.find({}).toArray();
    console.log(data)
}
getData()