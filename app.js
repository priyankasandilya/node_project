// calling local module
// const calculator = require('./calc');
// console.log(calculator.add(4,5));
// console.log(calculator.sub(10,5));
// console.log(calculator.mult(10,5));
// console.log(calculator.div(10,5));
// console.log(calculator.mod(10,5))
// console.log(calculator.sayHello())
// console.log(calculator.companyName);
// console.log(calculator.currTime);

// const {add,sub,mult,div,mod,currTime,companyName,sayHello} = require('./calc')
// console.log(add(6,4))
// console.log(sub(6,4))
// console.log(mult(6,4))
// console.log(div(6,4))
// console.log(mod(6,4))
// console.log(sayHello())
// console.log(companyName);
// console.log(currTime)

// const data = new Buffer.alloc(8,"priyanka");
// console.log(data)

// console.log("Hello World!!")
// console.error("Unauthorized user!")
// console.log(__dirname)

// const url = new URL('https://www.register.com/?name=gfg');
// console.log(url)
// console.log(url.searchParams)
// console.log(url.searchParams.get('name'))
// console.log(url.searchParams.append('roll',45))  //used to add roll as query string
// console.log(url.href)

const encoder = new TextEncoder()
let enc_Data = encoder.encode("hello")
console.log(enc_Data)
let decoder = new TextDecoder()
let dec_data = decoder.decode(enc_Data)
console.log(dec_data)