/*

numbers 
strings
boolean 
objects 
bigint 
undefined
null
symbol

*/

const { json } = require("express")

//numbers
let age = 21
let agelimit = 18

//strings
let name = "harry"
let lastname = "potter"

//boolean
let user = true
let logedout = false

//object
const person = {college :"rgpv", adress :"bhopal"}

//array object
const cars = ["BMV", "THAR", "LEMBO"]

//Date object 
const date = new Date("4-28-2025")


//Dynamic types
//This is allowed as we are assigning 
let x
x = 4
x = "hello"
console.log(x)

/*
This is a redeclaration of x which is not allowed using let
let x = 4
let x = "hello"
*/


/*
This is also not allowed const MUST be declared and assigned at the same time.
const y
y = 4
y = "hello"
*/


//bigint
let number = BigInt(1294034320482231298)