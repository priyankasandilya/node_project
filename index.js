/*---------------------File module----------------------------------------*/
const fs = require("fs")
// fs.writeFileSync("./content/t3.txt","Ram aam khata hai...hhahhhha")
// fs.writeFile("./contentss/t2.txt","Ram mango khata hai.... without me hahaha",(err,res)=>{
//     if(err){
//         console.log(err)
//            return
//     }
//     console.log(res)
// })

// fs.readFile('./content/sample.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(data)
// })
/*---------------------http module----------------------------------------*/
const data = require('./data')
// console.log(data)
// console.log(data.hh[0])

// import data1 from './data.js'
// console.log(data1)

// import {data2} from './data.js'
// console.log(data2)

const http = require("http")

// console.log("file execution start")
// const hh = fs.readFileSync('new.text','utf8')
// console.log(hh)
// console.log("File execution end")

// console.log("file execution start")
// fs.writeFile("new.txt","Ram mango khata hai.... without me hahaha",(err,res)=>{
//     if(err){
//         console.log(err)
//            return
//     }
//     console.log("file created")
// })
// console.log("File execution end")

// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'application/json'})
//     res.write(JSON.stringify(data))
//     res.end()
// }).listen(5000)


// const datacontrol = (req,res)=>{
//     res.write("<h1>welcome to node js.</h1>");
//     res.end();
// }
// http.createServer(datacontrol).listen('5000')


// http.createServer((req,res)=>{
//     res.write("This is Priyanka run coding on server.") 
//     // console.log(req.url)
//     if(req.url === '/'){
//         res.end("\nThis is main page")
//     }
//     if(req.url === '/about'){
//         res.end("\nThis is about page")
//     }
//     res.end();
// }).listen('5000')

// Getting input from command line
// Run code like <node index ./content/sample.txt 'This is sample file after demo file'>
    // console.log(process.argv)
    // const input = process.argv
    // fs.writeFileSync(input[2], input[3])

//write file and remove file by command line
// const input = process.argv
// // console.log(input)
// if(input[2] == 'add'){
//     // Run using <node index 'add' ./demofileWrite 'This is the demo file where writing data with create new file'>
//     fs.writeFileSync(input[3], input[4])
// }else if(input[2]=='remove'){
//     // Run using <node index 'remove' ./content/demofileWrite>
//     fs.unlinkSync(input[3])
// }else{
//     console.log("Invalid input")
// }

// const source = { b: 4, c: 5 };
// const returnedTarget = Object.assign({ a: 1, b: 2 }, source);
// console.log(returnedTarget.b,returnedTarget.a)

// const obj1 = { a: 1 };
// const new_obj = Object.assign({a:4}, obj1);
// console.log(new_obj.a);

// const object1 = {a: 1,b: 2,c: 3};  
// const object3= {  g: 1,h: 2,i: 3};       
//   const object2 = Object.assign(object1,{c: 4, d: 5});  
//   const object4 = Object.assign({g: 34, h: 25}, object3);  
//   console.log(object2.c, object2.d);  
//   console.log(object4.g, object4.h); 



