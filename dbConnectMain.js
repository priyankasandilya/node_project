const {MongoClient}=require('mongodb')
const url = 'mongodb://0.0.0.0:27017'
const client = new MongoClient(url)
const database = 'node-tut'

async function dbConnect(){
    let result = await client.connect()
    db = result.db(database)
    return db.collection('products')
}
module.exports = dbConnect;