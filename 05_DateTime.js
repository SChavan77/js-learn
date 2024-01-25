// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let myDate=new Date()
console.log(myDate) //2024-01-25T10:15:25.240Z
console.log(typeof myDate) //Object
console.log(myDate.toString()) //Thu Jan 25 2024 10:15:25 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) //Thu Jan 25 2024
console.log(myDate.toTimeString()) //10:18:16 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toLocaleString()) // 1/25/2024, 10:15:25 AM
console.log(myDate.toLocaleDateString()) //1/25/2024
console.log(myDate.toLocaleTimeString()) //10:17:51 AM

console.log(myDate.toISOString()) //2024-01-25T10:16:17.625Z
console.log(myDate.toJSON()) //2024-01-25T10:17:00.693Z
console.log(myDate.toUTCString()) //Thu, 25 Jan 2024 10:18:16 GMT
console.log(myDate.getTimezoneOffset()) //0
console.log(myDate.getHours()) //10
console.log(myDate.getDate()) //25

//To create a specific date, formats
let createDate=new Date(2023,10,2) // 2023-11-02T00:00:00.000Z > Month is here 10 but 11. Because in JS, month starts from 0
console.log(createDate.toDateString()) // Thu Nov 02 2023

let cDate=new Date("2023-11-02")
console.log(cDate.toLocaleString()) //11/2/2023, 12:00:00 AM
console.log(cDate.toString()) //Thu Nov 02 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

let timeStamp=Date.now() 
console.log(timeStamp) //1706179330713
//if we want to get the offset time duration,like booked date and present date
console.log(cDate.getTime()) //1698883200000 (this is in msec)
//to get in sec
console.log(Math.floor(Date.now()/1000)) //1706179600 , decimal comes so, rounded
console.log(cDate.getDate()) //2
console.log(cDate.getDay()) //4 : Thursday
console.log(cDate.getMonth()+1) 


//Most useful Date()
console.log(myDate.toLocaleString()) // 1/25/2024, 10:15:25 AM
console.log(myDate.toLocaleString('default',{
    weekday:'long',
    day : 'numeric' ,
    month: 'long',
    year: '2-digit',
    /*year:'numeric'*/
})) //Thursday, January 25, 24
console.log(new Date(8.64e15).toString()); //Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)

 