const dbConnect = require("./dbConnectMain")
const express = require("express")
const app=express()

app.get('/',async(req,res)=>{
    let data = await dbConnect()
    data = await data.find({name:'s20'}).toArray();
    res.send(data)
})
app.listen(5000)