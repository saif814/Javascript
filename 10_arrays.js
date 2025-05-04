const arr = ["BMV" , "VOLVO" , "LEMBO" , "RR"]
console.log(arr[2]) //Accessing the array 

console.log(arr.toString().replace("," , " ")) //This just replaces the first comma 
console.log(arr.toString().replace(/,/g , " "))

//Also this will not work as array is not a string its a type of object
//console.log(arr.replace(/,/g , " ")) 

console.log(arr.sort())

// Basic Array Methods

// Array length
// Array toString()
// Array at()
console.log(arr.at(2))
console.log(arr.at(-1))


// Array join()
console.log(arr.join(" , ")) 

// Array pop()
console.log(arr.pop())

// Array push()
console.log(arr.push("tesla"))
console.log(arr.join(" , "))


// Array shift()
console.log(arr.shift())
console.log(arr[0])

// Array unshift()
console.log(arr.unshift("buggati"))
console.log(arr[0])
console.log(arr.join(" , "))


// Array delete()
// Array concat()
const arra = ["facebook" , "instagram" , "snapchat"]
const newarr = arr.concat(arra)
console.log(newarr.toString().replace(/,/g, " "))



// Array copyWithin()
// Array flat()
const myar = [[1,2,3],[4,5,6],[7,8,9]]
console.log(myar.flat(Infinity))
const nums = 

// Array splice()
// Array toSpliced()
// Array slice()

//JavaScript Array Search
// Array Find and Search Methods
// Array indexOf()
console.log(newarr.indexOf("facebook"))

// Array lastIndexOf()
// Array includes()
console.log(newarr.includes("LEMBO"))

// Array find()
// Array findIndex()
// Array findLast()
// Array findLastIndex()



// Array Sort Methods
// Alphabetic Sort
// Array sort()
// Array reverse()
console.log(newarr.reverse().join(" , "))

// Array toSorted()
const months = ["jan","feb","march","april"]
// console.log(months.toSorted())

// Array toReversed()
// Sorting Objects	

// Numeric Sort
// Random Sort
// Math.min()
const value = [9,99,999,9999]
console.log(Math.min(...value))// here we have used a spread operator to unpack the array elements 

// Math.max()
// Home made Min()
// Home made Max()

console.log(Array.from("saif"))
