const dbConnect = require('./dbConnectMain')
const express = require('express')
const app = express()

app.use(express.json())
app.put('/:name', async (req, res) => {
    let getData = req.body

    let data = await dbConnect()
    data = await data.updateMany(
        {name:req.params.name},
        {$set:getData}
    )
    if(data.acknowledged){
        res.send({status:"Data updated!"})
    }
    
})
app.listen(5000)