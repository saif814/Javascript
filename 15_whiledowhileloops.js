const  myarray = ["SRK" , "cruise" , "RDJ"];
let arry = 0;
while(arry < myarray.length){
    console.log(`Your elements are ${myarray[arry]}`)
    arry += 1;
}

let score = 1;
do{
    console.log(`Your current score is ${score}`)
    score++;
}while(score <= 10)

let newscore = 11;

do{
    console.log(`Your score is ${newscore}`)
    newscore++;
}while(newscore <= 10)


//For loop
const arr = [5,4,2,7,6,9,8,1,15]
for(const nums of arr){
    console.log(nums);
};


const greetings = "Hello World";
for(const greet of greetings){
    if(greet === " "){
        continue;
    }
    console.log(`This is your array ${greet}`)
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const map = new Map();
map.set('IN' , 'India')
map.set('USA', 'United states of america')
map.set('Fr' , 'france')

console.log(map)
for(const [keys , value] of map){
    console.log(keys, ">" ,value)
}