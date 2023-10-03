const {parentPort} = require('node:worker_threads')
let j=0
for(let i=0;i<600000000;i++){
    j++;
}
parentPort.postMessage(j)



// const express=require('express')
// const app = express()
// const midcall = (req,res,next)=>{
//     console.log("hi this is api")
//     next()
// }
// app.use(midcall)

// app.get('/posts',(req,res)=>{
//     console.log('first call')
//     res.send('hi this is my app')
// })    
// app.listen(8000,()=>{
//     console.log('server is listening on port 8080')
// })