// This is a single line comment
/* And this is a 
multi line commment*/
// Anything written from of // and between /* will be ignored by compiler */

// x ,y ,z are undeclared variables
x = 5
y = 5
z = x + y
console.log(z)

//not used these days (var)
var x = 4
var y = 5
var z = x + y
console.log(z)

var x = 4
var y = 3
var z = x + y
console.log(z)

// var x = 18
// console.log(x)

// var x = 17
// console.log(x)

/*

//use of let 
let x = 111
let y = 222
let z = x + y
console.log(z)

while using var we were able to redeclare x again and again 
but with let and const it gives an error one of few reasons we avoid using var 

*/

let firstvalue = 44
let secondvalue = 55
let total = firstvalue + secondvalue
console.log(total)

const first = 88 
const second = 99
console.log(first + second)


//This is also allowed 
let person = "JHON", carname = "BMV", price = 2000000
console.log(carname,price)

//we can also do 
let user = "Harry",
age = 20
console.log(user,age)

//placed in a " " will be treated as a string even if it's a number 
let a = "5" //This makes others to be treated as a string too
let b = 4
let m = 8
let c = a + b + m
console.log(c) //output is 548

//but 
let d = 5
let e = 4
let f = "4" //At this stage (5 + 4 = 9 (9 is converted ot "9") so it goes like "9" + "4")
let g = d + e + f
console.log(g) //output is 94