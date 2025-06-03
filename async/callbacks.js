function greet(name,callback){
    console.log(`${name} won its first ipl trophy`);
    callback();
}

function tried(){
    console.log("Punjab Kings lost");
}

greet("RCB" , tried);

//example with set time out

function fetchData(callback){
    console.log("fetching data...")
    setTimeout(() => {
        console.log("Data fetched...");
        callback();
    }, 2000);
}

function processdata(){
    console.log("proicessing data...");
}

fetchData(processdata);