let x = 5
let y = 4

console.log(x == 5)//true

console.log(x == "5")//true

console.log(x === "5")//false as it also checks for the type 

console.log(y != 4)//false

console.log(y !== 4)//false as it checks not equal value and nor equal data types

console.log(y !== "4")//true as the data type is different

console.log(y !== 8)//true

console.log(!(x == y))//true as it says not equal 

//Conditional (Ternary) operator

let age = 20

let vote = (age>=21)? "Allowed to vote": "Not allowed to vote" //This is an example of ternary operator
console.log(vote) 



//Example
let limit = 10
let agged = "9"
if(isNaN(agged)){
    console.log("enter a valid integer value")
}else{
   let dec = (agged>=limit)? "Allowed to vote":"Not allowed"
   console.log(dec)
}