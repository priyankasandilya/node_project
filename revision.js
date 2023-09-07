const { error } = require('console');
const fs = require('fs');
const path = require('path')
const dirname =path.join(__dirname,'content')
const filepath = `${dirname}/sample.txt`

// const data = fs.readFileSync(filepath,'utf8')
// console.log(data)

// fs.writeFileSync(filepath,'This is a sample file.')

// fs.writeFile(filepath,'This is sample file creating.',(err,res)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.info("File created")
// })
// fs.readFile(dirname+'/sample.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.info(data)
// })

// fs.appendFile(filepath,'\nThis is added text to update file.',(err,data)=>{
// if(err){
//     console.log(err)
//     return
// }
// console.info("File is updated")
// })

// fs.rename(filepath,`${dirname}/sample-copy.txt`,(err)=>{
// if(!err){
//     console.info("file renamed")
// }
// })
// fs.unlink(filepath,(err)=>{
//     console.log("file Deleted")
// })

// fs.renameSync(`${dirname}/sample-copy.txt`,filepath)
// fs.unlinkSync(filepath)

// console.log(fiilepath)
// file.writeFileSync('./content/sample.txt','This is a sample file')

// file.readFile(fiilepath,'utf8',(err,data)=>{
// if(err){
//     console.error('Path of file is not correct')
//     return
// }
// console.log(data)
// })

// file.appendFile(fiilepath,'\nThis is update sapmple file.',(err,res)=>{
//     if(!err){
//         console.log('status','file is updated')
//         return
//     }
//     console.log(err)
// })

// file.rename(fiilepath,`${dirname}/sample-copy.txt`,(err)=>{
//     if(!err){
//         console.log('File Renamed')
//     }
// })

// file.unlinkSync(fiilepath)
// file.unlink(fiilepath,(err)=>{
//     if(!err){
//         console.log("File deleted")
//     }
// })

const {MongoClient} = require('mongodb')
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)
const databasename = 'node-tut'

const getData = async ()=>{
let result = await client.connect()
let db = result.db(databasename)
let collection = db.collection('products')
let data = await collection.find({}).toArray();
console.log(data)
}
getData()