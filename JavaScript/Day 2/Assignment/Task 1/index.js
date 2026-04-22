let b = Number(prompt("Enter a number:"));
if (b > 0) {
    console.log("Greater than 0");
}
else if (b < 0) {
    console.log("Less than 0");
}
else if(b==0) {
    console.log("Equal to 0");
}
else {
    console.log("Invalid Input");
}

console.log(typeof b);