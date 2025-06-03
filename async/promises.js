function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data is here");
        }, 2000);
    });
}

fetchData().then(data => {
    console.log(data)
});
