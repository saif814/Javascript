// Javascript Objects

// Objects are containers for Properties and Methods.
// Properties are named Values.
// Methods are Functions stored as Properties.
// Properties can be primitive values, functions, or even other objects.


const person = {firstname : "Harry" , lastname : "Potter" , age : 21 , eyecolor : "Blue"}

//Or we can do this like 
const actor = {}

//Now we will add the key and values to this actor object
actor.firstname = "Tom"
actor.lastname = "Cruise"
actor.age = 61
actor.eyecolor = "brown"

console.log(actor.eyecolor)
console.log(person.age)

//We can also do 
console.log(person["eyecolor"])

//Using a function in an object
const user = {
    username : "iamsaif",
    accountname: "sidd814",
    isstudent : true , 
    greetings : function(){
        return "Hello " + this.username + " Your account name is "+ this.accountname
    }
}

// user.greetings
console.log(user.greetings)
console.log(user.greetings())


//Object constructor functions
function xyz(name , age , eye){
    this.username = name
    this.age = age
    this.eyecolor = eye
    this.gender = "male"
}

xyz.nationality = "English"//this wont work


//instead we use prototype
xyz.prototype.nationality = "English"


// We can also add methods this way
// xyz.prototype.greet = function(){
//     console.log(this.username + " " + hello)
// }

const user1 = new xyz("harry",21,"blue")
xyz.prototype.greet = function(){
    return this.username + " " + "hello"
}
console.log(user1.greet())

// console.log(user1.eyecolor)
// console.log(user1.gender)


const user2 = new xyz("james",42,"brown")


// console.log(user2.username)
// console.log(user2.gender)
// console.log(user2.nationality)

//Object methods 
//Lets use te assign mehtod
const accx1 = {
    firstname : "Harry",
    lastname : "potter",
    age : 21,
    national : "English"
}

const accx2 = {firstname: "lilly" , lastname : "potter" , age : 38 , national : "english"}


console.log(Object.entries(accx2))


//Assign source to target 
console.log(Object.assign(accx2,accx1))


console.log(Object.entries(accx2))


//From enteries 
const fruits = [
    ["apple" , 300],
    ["banana" , 200],
    ["mango" , 100]
]

const fruitsobj = Object.fromEntries(fruits)

//Adding a new property
Object.defineProperty(fruitsobj, "year", {value :2008, enumerable: true})
console.log(fruitsobj.year)
console.log(fruitsobj)


//Object.keys()
const key = Object.keys(fruitsobj)
console.log(key)



const valv = {
    usernam : "point",
    accounnam : "pointer"
}

Object.defineProperty(valv , "member", {value : "2005"})
console.log(valv)



const anotherobject = {
    yourname : "Michel",
    yourwork : "Singer"
}

anotherobject.yourplace = "England"
//works here
anotherobject.yourage = 42
Object.preventExtensions(anotherobject)

//not here after using preventExtension
anotherobject.yourage = 42

console.log(anotherobject)
