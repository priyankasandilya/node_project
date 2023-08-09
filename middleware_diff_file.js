module.exports = (req, res, next) => {
    if(!req.query.age){
        res.send("Please provide your age")
    }else if(req.query.age<18){
        res.send("you are under aged")
    }
    else{
        next()
    }
    
}