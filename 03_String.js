const name="Sushmitha"
const id=101

let name1=new String('Sush')
let name2=new String("SSush")
let name3 = "Sush"
//String Interpolation : BackTick usage
console.log(`My name is ${name} and my id number is ${id}`)
console.log(typeof name)
console.log(typeof name2)
console.log(name2===name3) //false
console.log(name2===name1) //false, as the reference are diff in this.
console.log(name2.toUpperCase)
console.log(name2.charAt(2))
console.log(name2.indexOf('S'))
//const subStr=name2.substring(0,2)
const name4=new String("Sushmitha")
const subStr=name4.substring(0,4)
/**
 *  S  U  S  H  M  I  T  H  A
 *  0  1  2  3  4  5  6  7  8
 *  -9 -8 -7 -6 -5 -4 -3 -2 -1
 */

const sliceStr=name4.slice(-7,4) //SH prints
console.log(subStr) 
console.log(sliceStr) 

const name5="  Sush  "

const url="https://www.google.com"
console.log(url.replace(".","-"))
console.log(url.includes("Google")) //false. For "google"-true
console.log(url.split("."))



