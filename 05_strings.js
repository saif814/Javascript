//Strings are primitive and immutable in javascript 

//length property
let name = "harrypotter"
console.log(name.length)

//Extracting String Characters
//If no character is found charAt() returns an empty string.
console.log(name.charAt(5))

//at() it allows negative indexing 
console.log(name.at(-11))

//[] If no character is found, [ ] returns undefined
console.log(name[5])

/*

slice(start, end)
substring(start, end)
substr(start, length)

*/

//slice(start, end)
console.log(name.slice(4,10))

//substring(start, end)
console.log(name.substring(4,8))

//upper or lower case 
console.log(name.toUpperCase())
console.log(name.toUpperCase())
console.log(name.toLowerCase())

//string trim
let user = "    sidd    "
console.log(user)
console.log(user.trim())
console.log(user.trimStart())
console.log(user.trimEnd())

//repeat()
console.log((name + " ").repeat(4).trim())

//Replace 
let statement = "Hello, my name is Jhon! and Jhon!"
console.log(statement)
console.log(statement.replace("Jhon!" , "Harry!")) //This will replace only the first match
console.log(statement.replace(/Jhon/g , "Harry!")) //This will replace all the matches(Jhon!)


//JavaScript String Search

// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()

// JavaScript Template Strings

//Template Strings use back-ticks (``) rather than the quotes ("") to define a string:

//Template String provide an easy way to interpolate variables and expressions into strings.
//The method is called string interpolation.

let username = "Siddhart"
let accountname = "Siddhart814"

console.log(`Hello ${username}, your account name is ${accountname}`)

