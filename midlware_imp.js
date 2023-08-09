const express = require('express')
const app = express()
//----middleware start--------------------
const reqFilter = (req, res, next) => {
    if(!req.query.age){
        res.send("Please provide your age")
    }else if(req.query.age<18){
        res.send("you are under aged")
    }
    else{
        next()
    }
    
}
//------syntax for application level middleware
    // app.use(reqFilter)
//-------middleware end-------


app.get('/', (req, res) => {
    res.send("Welcome to Home page")
})

app.get('/contact', (req, res) => {
    res.send("Welcome to contact page")
})

//-----route level middleware applied on route------------------
app.get('/about',reqFilter,(req,res)=>{
    res.send("Welcome to About Page")
})

app.get('*', (req, res) => {
    res.send("OOP's this is not a valid page")
})

app.listen(5000)