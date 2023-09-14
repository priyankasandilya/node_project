//local module creation
const calculation = {
    add: (x, y) => {
        return x + y;
    },
    sub: (x, y) => {
        return x - y;
    },
    mult: (x, y) => {
        return x * y;
    },
    div: (x, y) => {
        return x / y;
    },
    mod: (x, y) => {
        return x % y;
    },
    companyName : "GeeksforGeeks",
    currTime : new Date().toLocaleDateString(),
    sayHello : function(){
        console.log("Hello Geeks User")
    }

}
module.exports = calculation;
