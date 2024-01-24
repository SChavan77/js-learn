const nm=500 
const nm2=new Number(600) 
console.log(typeof nm) //number
console.log(nm)
console.log(typeof nm2) //object
console.log(nm2)

console.log(nm2.toString().length)
console.log(typeof nm2) //comes as object only
console.log(nm2.toFixed(3)) //600.000

const floatNum=123.5646
console.log(floatNum.toPrecision(4))//4->123.6 3->124 2->1.2e+2 1->1e+2
console.log(typeof floatNum.toPrecision(4)) //string

/** If we have a very big number. To read, it's gonna be difficult. 
 * Then we use stringlocale to represent it neatly. By default it is to be US standard
 *  1000000 -> 1,000,000
 */
const longNum =100000000
console.log( longNum.toLocaleString()) //string, 100,000,000
console.log( longNum.toLocaleString('en-IN'))  //10,00,00,000

//################## MATH #####################################
//Math is itself an Object . Try checking it's features, functions on typing Math in console
/**
 * MATH: The Math namespace object contains static properties and methods for mathematical constants and functions.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 * 
 * Math works with the Number type. It doesn't work with BigInt.
 * E 2.718281828459045
LN2 0.6931471805599453
LN10 2.302585092994046
LOG2E 1.4426950408889634
LOG10E 0.4342944819032518
PI 3.141592653589793
SQRT1_2 0.7071067811865476
SQRT2 1.4142135623730951
 *  exlpore other funcs
 */

console.log(Math.abs(-4)) //4
console.log(Math.round(4.567)) //5: using frequently
console.log(Math.ceil(4.567)) //5
console.log(Math.floor(4.567)) //4
console.log(Math.sqrt(2).toPrecision(3)) //1.41...->1.41

//console.log(Math.random()) //(0 to 1) range

//eg:1 to 6: dice game
//console.log((Math.random()*10))  //0 to 9
//what if we have  0.013434, then we get 0. so add 1
console.log((Math.random()*10)+1)  //1 to 10: 10 is exclusive   

/** 
 * if we want the range between min and max : say 10 and 20
 * FORMULA: Math.floor(Math.random()*(max-min+1)+min) 
 * 
 * */
//numbers ranges from 10 and 20
console.log(Math.floor((Math.random()*(20-10+1))+10))

//DICE rolling
const max=6
const min=1
console.log(Math.floor(Math.random()*(max-min+1))+min)




