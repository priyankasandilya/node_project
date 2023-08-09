const path = require('path')
const express = require('express')
const app = express()
//------------import middleware--------------------------------
const reqFilter = require('./middleware_diff_file')

//---- Grouped middleware--------
const route = express.Router()
route.use(reqFilter)





const dirname = path.join(__dirname,'public')

//import ejs template engine------
app.set('view engine','ejs')

//access HTML file method 1 with (.html) extension like
//http://localhost:5000/about.html
    // app.use(express.static(dirname))

// render HTML file method 2 without (.html) extension like
//http://localhost:5000/about
// app.get('/',(req,res)=>{
//     res.sendFile(`${dirname}/index.html`)
// })
// route.get('/about',(_,res)=>{
//     res.sendFile(`${dirname}/about.html`)
// })

// app.get('*',(_,res)=>{
//     res.sendFile(`${dirname}/nopage.html`)
// })

//-------------------EJS Template engine implementation with dynamic page----------------------------
app.get('/profile',(_,res)=>{
    const user ={
        name:'pari',
        email:'pari@gmail.com',
        country:'USA',
        skills:['php','node js','java', 'react js', 'C++']
    }
    res.render('profile',{user})
})

route.get('/login',(_,res)=>{
    res.render('login')
})


// app.use('/',route)
app.listen(5000)