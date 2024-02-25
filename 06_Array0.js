/*Exploring Set Object, Includes, Some, Reduce, Find & FindIndex

Check user with such name exists or not.
Adding new elements in the array.
Removing duplicate elements from the array.
Concatenating two arrays.

*/

// Array of objects

const users = [
    {
        id: 1,
        name: "Ajay Suneja",
        isActive: true,
        age: 30
    },

    {
        id: 2,
        name: "Mohammad Fraz",
        isActive: true,
        age: 26
    },

    {
        id: 3,
        name: "Manohar Batra",
        isActive: true,
        age: 35
    },

    {
        id: 4,
        name: "Anshika Gupta",
        isActive: false,
        age: 23
    }
]

const names=[];
/*for(let i=0;i<users.length;i++){
    if(users[i].name==name){
        console.log("FOUND");
    }
}*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is your name?', name => {
  console.log(`Hello, ${name}!`);
  readline.close();
});

/*for(let i=0;i<users.length;i++){
    if(users[i].name==name){
        console.log("FOUND");
    }
}*/