const fs = require('fs')
const path = require('path')
const dirname = path.join(__dirname,'content')
const filepath = `${dirname}/sample.txt`

//------create file---------------
    // fs.writeFileSync(filepath, "This is a simple text file for testing.")

//------read file-----------------
    // fs.readFile(filepath,'utf8',(err,data)=>{
    //     console.log(data)
    // })

//-------------update file-----------------
    // fs.appendFile(filepath,'\nthis is added text adding in existing file',(err,data)=>{
    
    //     if(!err){
    //         console.log(console.log("File is updated"))
    //     }
    // })

//-----------Rename file-------------
    // fs.rename(filepath,`${dirname}/sample-copy.txt`,(err)=>{
    //     if(!err){
    //         console.log("File Renamed")
    //     }
    // })

//------Delete file------------------
    // fs.unlinkSync(`${dirname}/sample-copy.txt`)

    // fs.unlink(`${dirname}/sample.txt`,(err)=>{
    //     if(!err) console.log("file deleted")
    // })

    //--------Asychronous example------------------------
    // let a=10
    // let b=0

    // let c = new Promise((resolve, reject) => {
    //     setTimeout(()=>{
    //         b=10;
    //         resolve(b)
    //     },1000)
    // }).then((data)=>console.log(a+data))