const dbConnect = require("./dbConnectMain")
const express = require("express")
const app = express()
const mongodb=require('mongodb')

app.use(express.json())
app.delete('/:id',async(req,res)=>{
    const getdata = req.params.id
    let data = await dbConnect()
    const result = await data.deleteOne({_id:new mongodb.ObjectId(getdata)})
    if(result.acknowledged){
        res.send({status:"Data deleted"})
    }
    
})
app.listen(5000);