const express = require('express')
const app = express()
const EventEmitter = require('events')
const event = new EventEmitter()

count =0
event.on('countApiRequest',()=>{
    count++
    console.log("Api request count is : "+count)
})

//basic api
app.get('/',(req,res)=>{
    res.send("Basic API")
    event.emit("countApiRequest")
})

//update api
app.get('/update',(req,res)=>{
    res.send("Update API")
    event.emit("countApiRequest")
})

//search api
app.get('/search',(req,res)=>{
    res.send("Search API")
    event.emit("countApiRequest")
})

app.listen(5000)