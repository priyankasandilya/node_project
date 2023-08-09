const $mysql = require('mysql');
const conn = $mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"vishal"
})

// console.log(conn)
conn.connect((Error)=>{
    if(Error){
        console.warn("error in connection")
    }
    else{
        console.log("Connection successful")
    }
})

module.exports = conn