const http = require("http")
const {Worker} = require('node:worker_threads')
const app = http.createServer((req,res)=>{
  if(req.url == '/'){
    res.writeHead(200,{'content-type':'text/plain'})
    res.end(`Home Page`)
  }
  if(req.url = '/slow-page'){
    // let j=0
    // for(let i=0;i<600000000;i++){
    //   j++;
    // }
    // res.writeHead(200,{'content-type':'text/plain'})
    // res.end(`slow page ${j}`)
    const worker = new Worker('./worker-thread.js')
    worker.on('message',(j)=>{
      res.writeHead(200,{'content-type':'text/plain'})
      res.end(`slow page ${j}`)
    })
  }
})
app.listen(5000,()=>{
console.info("server listening on PORT 5000")
})