for(let index = 0; index <= 10; index++){
    console.log("This is element number "+ index)
}

// for(let index = 0; index <= 10; ++index){
//     console.log("This is element number "+ index)
// }

//Looping through an array 
const myarray = ["javascript" , "GO" , "c#" , "python"];
for(let index = 0; index < myarray.length; index++){
    console.log(myarray[index]);
}


//Break and continue
for(let index = 0; index <= 10; index++){
    if(index == 5){
        console.log("5 Detected");
        continue;
    }
    console.log(`you index is ${index}`)
}
