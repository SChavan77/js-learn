//Spread and Rest functionality in the function
 
function add1(...nums){ //rest scenario
    return nums //array
}
function add(a,b,c,...other){ //rest scenario
    console.log(other)
    return a+b+c
}

console.log(add(1,2,3,4,5,6));

const user={
    name:"Sushmitha",
    prices: 99
}

function printPrice(obj){
    console.log(`Username is ${obj.name} and price is ${obj.prices}`)
}
printPrice(user);
printPrice({
    name: "Heyhey",
    prices: 101
}) //Object passing

const myArray=[200,400,500,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray))
console.log(returnSecondValue([10,20,30,40]))


function one(){
    const name="Sush"
    function two(){
        const website="YouTube";
        console.log(name);
    }
    two()
}
one()


onee(5) //this can be done.
function onee(nums){
    return nums+1
}

twoo(5) //this can't do: before init we can't call. Hoisting. Context flow is diff here
const twoo=function(num){
    return num+2
}














