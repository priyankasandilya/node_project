const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    name:String,
    brand:String,
    category:String,
    salary:Number
})
module.exports = mongoose.model('products',productSchema)