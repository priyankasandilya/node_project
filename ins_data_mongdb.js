const dbConnect = require('./dbConnectMain')
const insertData = async ()=>{
    let data = await dbConnect()
    //---------------insert single data---------------
        // let result = await data.insertOne(
        //     {name:'note 7',brand:'samsung',price:500,category:'mobile'}
        // )
    ////---------------insert multiple data---------------
        let results = await data.insertMany([
            {name:'note 7',brand:'samsung',price:500,category:'mobile'},
            {name:'note 8',brand:'infinix',price:500,category:'mobile'}
        ])
        if(results.acknowledged){
            console.warn("Data inserted")
        }
}
insertData()