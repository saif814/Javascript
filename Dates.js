// Javascript dates objects

let mydate = new Date()
console.log(mydate)

let myydate = new Date("October 13, 2014 11:13:00")
console.log(myydate)

let create = new Date()
console.log(create.getMonth()+1)

let createdate = new Date()
console.log(createdate.getDate())

//To just print out todays date we can do like 

let todaysdate = new Date()
let options = { month : "long" , day: "numeric" , year: "numeric"}
console.log(todaysdate.toLocaleDateString('en-US' , options).replace(',' , ''))
