//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
const myArr=[0,1,2,3,4,true,"Name"]

myArr.pop() //deleteAtEnd
myArr.push(7) //insertAtEnd
myArr.unshift(6) //InertAtBeginning
myArr.shift() //deleteAtBeginning

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))

//To remove a prarticular index in an array
myArr.splice(2,1)
console.log(myArr)

console.log(myArr.join())
console.log(myArr.toString())
/**
 * myArray.reverse()
 * myArray.sort()
 * myArray.slice()
 */

//ADVANCED TOPICS: filter(), map(),for()
const users=[
{
    name:"Sushmitha",
    id:101,
    isActive:false,
    age:27
},{
    name:"Pavitra",
    id:102,
    isActive:true,
    age:40
}
]
console.log(users)

//whether an ele is present in an array or not
//LEVEL-0
const isNameExist=(name, userss)=>{
    let exist=false;
for(let i=0;i<userss.length;i++)
    if(userss[i].name===name)
            exist=true;
    return exist;
}
console.log(isNameExist("Sush",users))

//LEVEL -1
const isNameExist1=(name, userss)=>{
    const user=userss.find((userss)=>userss.name===name)
    return user;
    //to return as boolean, use return Boolean(user);
}
console.log(isNameExist1("Sushmitha",users))

//LEVEL-2
const isNameExist2=(name, userss)=>{
    const indx=userss.findIndex((userss)=>userss.name===name)
    return indx>=0;
    //to return as boolean, use return Boolean(user);
}
console.log(isNameExist2("Sushmitha",users))

//LEVEL-3
const isNameExist3=(name, userss)=>{
    const usr=userss.some((userss)=>userss.name===name)
    return usr;
}
console.log(isNameExist3("Sushmitha",users))


//ADDING-INSERTING ele into array: other than push ways
