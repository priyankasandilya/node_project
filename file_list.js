// console.log("File List Implementation")
const fs = require('fs')
const path = require('path')

// console.log(__dirname)
// console.log(__filename)
const dirname = path.join(__dirname,'content');
// console.log(dirname)
// console.log(path.join(__filename))

//create files under directory and write over them--------
// for(i=0; i<5;i++){
//     fs.writeFileSync('./content/sample'+(i+1)+'.txt', `This is Sample file ${i+1}`)}


// List all the files under directory-------
fs.readdir(dirname, (err,files)=>{
    // console.log(files)
    files.forEach((item)=>{
        // console.warn("File name is: "+item)
    })
    // for(let i in files){
    //     console.warn(files[i])
    // }
    // for(i of files){
    //     console.warn(i)
    // }
    // for(let i=0;i<files.length;i++){
    //     console.warn(files[i])
    // }
})

