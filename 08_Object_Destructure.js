//Object de-srructuring. Arrays also we do, but rarely.

const course={
name:"Science",
price:199.99,
Instructor: "Mehta"
}

console.log(course.Instructor)
const {name,price,Instructor} =course
console.log(Instructor)

//JSON OBJECT, mostly used json.Stringyfy()
const jsonObj={
    "name":"Science",
    "price":199.99,
    "Instructor": "Mehta"
}
