const dbConnect = require('./dbConnectMain')
const deleteData = async ()=>{
    const data = await dbConnect()
    //------------Delete single data-----------
    // const result = await data.deleteOne(
    //     {name:'note pro 7'}
    // )

    //-------------delete all data of this name---------
    const result = await data.deleteMany(
        {name:'note 7'}
    )
    if(result.acknowledged){
        console.log("Data deleted")
    }
}
deleteData();