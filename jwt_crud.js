require('dotenv').config()
const express = require('express')
const app=express()
const jwt = require('jsonwebtoken')

app.get('/post',(req,res)=>{
    // res.send("Hi this is my first jwt API")
    res.json({status:200,message:"welcome to the API service"})
})

app.post('/api/post',verifyToken,(req,res)=>{
    jwt.verify(token,process.env.SECRET_KEY,(err,authData)=>{
        if(err){
            res.sendStatus(403)
        }else{
            res.send({
                message:'POST CREATED!',
                authData
            })
        }
    })
})

app.post('/api/login',(req,res)=>{
    const user = {
        id:1,
        username:"priyanka",
        email:"priyankasandilya1995@gmail.com"
    }
    jwt.sign({user:user},process.env.SECRET_KEY,(err,token)=>{
        expiresIn: '30d',
        res.json({token})
    })
})

function verifyToken(req,res,next){
    const bearerHeader = req.headers["authorization"]
    if(typeof bearerHeader !== 'undefined'){
        const bearerToken = bearerHeader.split(" ")[1]
        token = bearerToken
        next()
    }else{
        res.sendStatus(403)
    }
}
app.listen(8000,()=>{
    console.log("Server listening on port:8000")
})


//----------------file read and write using piping---------
const fs=require('fs')
const rs=fs.createReadStream('./content/input.txt')
const ws=fs.createWriteStream('./content/output.txt')

function finalMessage(msg){
    console.log(msg)
}
function pipeReadToWrite(readStream,writeStream,finalMessage){
    function handleError(err){
        readStream.close()
        writeStream.close()
        finalMessage("error found while writing data")
    }
    readStream.on("error",handleError)
            .pipe(writeStream)
            .on("error",handleError)
            .on("finish", finalMessage)
}
pipeReadToWrite(rs,ws,finalMessage)

//--------------Yargs--------------------------------
const yargs = require('yargs')
// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds two number',
    builder: {
        firstNumber: {
            describe: 'First Number',
            demandOption: true,  // Required
            type: 'number'     
        },
        secondNumber: {  
            describe: 'Second Number',
            demandOption: true,
            type: 'number'
        }
    },
    // Function for your command
    handler(argv) {
        console.log("Result:", 
            (argv.firstNumber+argv.secondNumber))
    }
})
yargs.parse()

//-----------------zip file suing zlib-----------
var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");

// Decompress the file input.txt.gz to input.txt
fs.createReadStream('input.txt.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('input.txt'));
  
console.log("File Decompressed.");