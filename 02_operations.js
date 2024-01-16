//All these not good way of coding. But for understanding about Type conversion, coded this way.

let value=3
let negValue=-value
console.log(negValue)

let str1="Hi,"
let str2=" Hello"
let str3=str1+str2
console.log(str3)

console.log(+true) //1
console.log(-true) //-1
console.log(-false) //-0
console.log(+false) //0
console.log(""+1) //0+1=1

//COMPARISONS: >,<,>=,=< : Not a good practice to use unrelated types.
/**
 * NULL- Equality check(==) and comparisons behaves differently. null will be treated as Integer while comparing.
 */
console.log("********* NUMERICAL COMPARISON **********")
console.log("2">1) //true
console.log("02">"1") //false
console.log("02"==2) //true, implicitly type conversion happens to Integer. But in strict check, won't give TRUE

console.log("*********** NULL COMPARISON (Avoid) **************")
console.log(null>0)  //false
console.log(null==0) //false
console.log(null<0)  //false; null<1: true, because here null is 0
console.log(null<=0)//true

console.log("************ Undefined COMPARISON (Avoid) **************")
console.log(undefined>0)  
console.log(undefined==0) 
console.log(undefined<0) 
console.log(undefined<=0)

//Strict Check: checks value && it's type also: ===