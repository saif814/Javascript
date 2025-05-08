function myfunction(a){
    return a*a
}

console.log(myfunction(8))

//A function expression can be stored in a variable
//The function is an anonymous function a function without a name

let add = function (c, d){return c*d}
console.log(add(4,5))

//Function Hoisting
//functions can be called before they are declared as they are hoisted
console.log(anotherfunction(6))
function anotherfunction(y){
    return y+y
}
//Functions defined using an expression are not hoisted
// console.log(addd(6,3))
let addd = function (c, d){return c-d};
// console.log(add(4,5))

//Self-Invoking Functions

(function(){
    console.log("Hello, World!")
})();

//Arrow functions

const z = (x,y) => x/y;
console.log(z(4,2))



//Function rest parameter
function sum(...args){
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}

let g = sum(3,4)
console.log(g)

// here a is a gloabal varialbe as not declared using var const or let 
// hence can be accessed outside the function
function hello(){
    a = 10;
}
hello()
console.log(a)


//But here as h is declared using const it is a local variable
// hence can't be accessed outside the function resulting in an error 
function world(){
    const h = 12
}
world();
// console.log(h)

(
    () => {
        const Founder = "Facebook"
        console.log(`Welcome to ${Founder}`)
    }
)();

(
    () => {
        const user = "user1"
        console.log(`Good morning ${user}`)
    }
)();

(()=>console.log("Welcome to facebook"))();
(()=>console.log("user1"))();


((a, b) => {
    const result = a * b;
    console.log(result)
})(4,4); //Thats how you pass arguments to a self-invoking functions
  