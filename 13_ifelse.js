let isloggedin = true;
let isloggedout = true;

if(isloggedin){
    console.log("Panda")
}else if(isloggedout){
    console.log("Black and white")
}

// We have few conditional too for the if else staements 
// < , > , == , === , <= , >= , <== , >== , && , || 
if(isloggedin && isloggedout && 2 === 7){
    console.log("Print this out")
}

const month = "march";

switch (month) {
    case "jan":
        console.log("This is jan");
        break;
    case "feb":
        console.log("This is feb");
        break;
    case "march":
        console.log("This is march");
        break;
    case "april":
        console.log("This is april");
        break;
    case "may":
        console.log("This is may");
        break;
    default:
        console.log("Month can't be recognised");
        break;

}