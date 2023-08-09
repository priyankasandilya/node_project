const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    // console.log(req.query.name)
    res.send(`
    <h3>welcome to Home page</h3>
    <a href="/about">about</a>\t
    <a href="/contact">contact</a>
    `)
    
})

app.get('/about',(req,res)=>{
    res.send(`
        <input name="username" placeholder="user name">
        <button value="click">Click</button>
        <a href="/">back</a>
    `)
})

app.get('/contact',(req,res)=>{
    res.send([
        {
            name:'pari',
            email:'pk@gmail.com'
        },
        {
            name:'panku',
            email:'pp@gmail.com'
        },
        {
            name:'lolu',
            email:'lolu@gmail.com'
        }
    ])
})
app.listen(5000)