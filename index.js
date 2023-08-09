/*---------------------File module----------------------------------------*/
// const fs = require("fs")
// fs.writeFileSync("./contents/t3.txt","Ram aam khata hai...")
// fs.writeFile("./content/t2.txt","Ram mango khata hai....",(err,res)=>{
//     if(err){
//         console.log(err)
        //    return
//     }
//     console.log(res)
// })

/*---------------------http module----------------------------------------*/
const http = require("http")
const fs = require("fs")

const data = require('./data')
// console.log(data)

// import data1 from './data.js'
// console.log(data1)

// import {data2} from './data.js'
// console.log(data2)

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
//     // if(req.url === '/'){
//     //     res.end("This is main page")
//     // }
//     // if(req.url === '/about'){
//     //     res.end("This is about page")
//     // }
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





