const express = require('express')
const app = express()
require('./config')
const Product = require('./products')

app.use(express.json())

//create data using mongoose
    app.post('/create',async(req,res)=>{
    const data = new Product(req.body);
    const result = await data.save()
    res.send({status:"Data inserted"})
    })

//update data using mongoose
    app.put('/update/:_id',async (req,res)=>{
        console.log(req.body)
        console.log(req.params)
        const result = await Product.updateOne(
            req.params,
            {$set:req.body}
        )
        if(result.acknowledged){
            res.send({status:"Data updated"})
        }
        
    })


// list data using mongoose
    app.get('/list',async(req,res)=>{
        let data = await Product.find({name:'7 note'})
        res.send(data);

    })


//delete data using mongoose
    app.delete('/delete/:_id',async(req,res)=>{
        let result = await Product.deleteOne(req.params)
        if(result.acknowledged){
            res.send({status:"Data Deleted"})
        }
    })

//search data
app.get('/search/:key',async(req,res)=>{
    // console.log(req.params.key)
    // res.send({status:"Search done"})
    let result = await Product.find(
        {
            $or:[
                {name:{$regex:req.params.key}},
                {brand:{$regex:req.params.key}}
            ]
        }
    )
res.send(result)
})

app.listen(5000)