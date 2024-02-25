//Object creation: multiple objects (Object Literals) ; key-value concept

const mySym=Symbol("keyy")

const JsUser={
    age:20,
    name:"Sushmitha",
    location:"Shimogga",
    [mySym]:"MyKey1",
    isLoggenIn:true,
    loggedIndays:["Monday","Wednesday"],
    "hours":"6hrs"
} 
//Object.create(JsUser.age) //Singleton, constructor through
//Object accessing
console.log(JsUser.name) //not recommended
console.log(JsUser["name"]) 
console.log(JsUser["hours"]) //no other option
console.log(JsUser[mySym]) 
console.log(typeof JsUser[mySym]) 

