
/**
 * 
 * Primitive DT: String, Number, Boolean, null, Symbol, undefined, BigInt
 * Non-Primitive DT: Arrays, Objects, Functions, 
 * 
 */
console.log("Hi I'm Sushmitha");
let score=true
let num=Number(score)
console.log(typeof score)
console.log(typeof num)
/*
"33" ->33
"33abc"->NaN
null ->0
true->1
undefined ->NaN
*/
console.log(score)
console.log(num)

/**
 * null -> false
 * "" ->false
 * 0 ->false
 * 1-> true
 * "any value" ->true
 * undefined ->false
 */
let booleanNum=1;
let booleanValue=Boolean(booleanNum)
console.log(booleanNum)
console.log(booleanValue)

/**
 * 33->"33"
 * null (it will display a bit bold) -> null
 * undefined->undefined
 * 
 */

let stringNum=undefined;
let stringValue=String(stringNum)
console.log(typeof stringNum)
console.log(stringNum)
console.log(typeof stringValue)
console.log(stringValue)

//All DT summary: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
const indvScore=100
const scoreAv=100.42
const isLogIn=false
const outsideTemp=null
const bigNumber= 25482483626934879n
console.log(typeof bigNumber) //bigInt

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId) //false
console.log(id===anotherId) //false

/** 
 * Non-Primitive DT
 * Objects: Use curly braces,
 * In JS, function also considered as variable 
 * 
 */
//called as Function Object. (Object function)
const myFunc= function(){
    console.log("Hello World!");
} 