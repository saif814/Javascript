// JavaScript generally converts operands to numbers when performing operations — except for +,
// which has special behavior because it’s also used for string concatenation.

// '5' - '2'    // 3
// '10' * '2'   // 20
// '6' / 2      // 3
// '8' % '3'    // 2
// '2' ** '3'   // 8
// '2' + '2'    // 22

//                             NaN - Not a Number

// NaN is a JavaScript reserved word indicating that a number is not a legal number.

let x = 11 * "banana"
console.log(x)

// However, if the string is numeric, the result will be a number:

let y = 11 * 11
console.log(y)

// To check for a number 
let z = 11 * "applw"
console.log(isNaN(z))

//Using nan in mathmatical oper will also result in nan
let age = 22
let weight = NaN
console.log(age*weight)

//But if we try to add 
let accountnumber = NaN
let totalusers = 24
console.log(accountnumber+totalusers)

//Again while using the number as a string 
let acc = NaN
let user = "2533"
console.log(acc+user)

//NaN type returns a number 
let type = NaN
console.log(typeof(type))

//Infinity

let mynumber = 2
while(mynumber!=Infinity){
    console.log(mynumber)
    mynumber = (mynumber*mynumber) 
}

//Dividing by zero 
let val = 8 
console.log(val/0)

//type of infinity
console.log(typeof(Infinity))
