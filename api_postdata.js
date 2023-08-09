const dbConnect = require("./dbConnectMain")
const express = require("express")
const app=express()

//Add middleware to parse json data-----
app.use(express.json())
app.post('/', async(req,res)=>{
    let result = req.body
    console.log(result)
    
    let data = await dbConnect();
    data = await data.insertMany(result)
    res.send(data)
}

)
app.listen(5000)