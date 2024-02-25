function addNumber(n1,n2){
    console.log(n1+n2)
}
addNumber(3,4)
//reference, execution

function addNumber1(n1,n2){
    let result=n1+n2
    return result
    //return n1+n2
}

const res=addNumber1(10,20)
console.log(res);

function logInMessage(username){
    if(username===undefined){ //if(!username)
        console.log("Please enter a username")
        return
    }
    return `${username} logged in`
}

console.log(logInMessage("Sushmitha")) //if not passed: undefined logged in
console.log(logInMessage())
console.log(!undefined)

//we can give default value. undefined never comes now
function logInMessage1(username="Sam"){
    if(username===undefined){ //if(!username)
        console.log("Please enter a username")
        return
    }
    return `${username} logged in`
}