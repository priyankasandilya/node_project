const { error } = require('console');
const file = require('fs');
const path = require('path')
const dirname =path.join(__dirname,'content')
const fiilepath = dirname+'/sample.txt'
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