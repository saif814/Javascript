function fetchData(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data is loaded");
        }, 2000);
    });
}

async function main() {
    console.log("Start");
    const result = await fetchData();
    console.log(result);
    console.log("end");
}   

main();