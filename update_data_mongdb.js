const dbConnect = require('./dbConnectMain')
const updateData = async ()=>{
    let data = await dbConnect()

    //---------Update many record of same name "note 7"-------------
    let results = await data.updateMany(
        {name:"note 7"},
        {
           $set:{brand:"note series"} 
        }
    )
    //---------Update one record of same name "note 7"-------------
    let result = await data.updateOne(
        {name:"note 7"},
        {
           $set:{brand:"note series ss" , price:50} 
        }
    )
    console.log(result)
}
updateData()