const express = require('express')
const app = express()
const conn = require("./mysql_config")

app.use(express.json())
app.get('/',(req,res)=>{
    conn.query("select * from user",(err,result)=>{
        if(err)res.send("error in api")
        else res.send(result)
    })
})

app.post('/',(req,res)=>{
    const data = req.body
    conn.query("insert into user SET?",data,(err,results,fields)=>{
        if(err)throw err
        res.send(results)
    })
})

app.put('/:id',(req,res)=>{
    const data = [req.body.name, req.body.password, req.body.city, req.body.email, req.body.mobile]
    conn.query("update user set name=?,password=?,email=?,city=?,mobile=? where id="+req.params.id,data,(err,results,fields)=>{
        if(err)throw err
        res.send(results)
    })
})

app.delete("/:id",(req,res)=>{
    conn.query("delete from user where id="+req.params.id,(error,result)=>{
        if(error)throw error
        res.send(result)
    })
})


app.listen(5000)