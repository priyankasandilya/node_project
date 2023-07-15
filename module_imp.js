//----------Common JS------------
// const {hello,ahello} = require("./module1")
// hello()
// ahello("pari")

//-----------ES6 JS-------------------
import newhello, {hello as Hello, ahello} from './module2.js'
function hello(){
    console.log("main file execution")
}
hello()
ahello("pari")
newhello()
Hello()