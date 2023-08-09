const mongoose=require('mongoose')
//connection
 mongoose.connect('mongodb://0.0.0.0:27017/node-tut')
    const productSchemas = new mongoose.Schema({
        name:String,
        price:Number,
        category:String,
        brand:String
    })

//save data
const saveInDB= async()=>{
        const Product = mongoose.model('products',productSchemas)
    let data = new Product({name:'max 5',price:211,category:'mob',brand:'new brand'})
    let result = await data.save()
    console.log(result)
}

//update data
const updateInDB = async(req,res)=>{
    const Product = mongoose.model('products',productSchemas)
    let data = await Product.updateMany(
        {name:'max 5'},
        {$set:{category:'MOB', price:'22'}}
    )
    console.log(data)
}

//Delete data
const deleteInDB = async(req,res)=>{
    const Product = mongoose.model('products',productSchemas)
    let result = await Product.deleteMany({name:'max 5'})
    if(result.acknowledged){
        console.log("Data Deleted")
    }
}

//Read data
const readData = async (req,res)=>{
    const Product = mongoose.model('Products',productSchemas)
    let result = await Product.find({name:"note 8"})
    console.log(result)
}
readData()