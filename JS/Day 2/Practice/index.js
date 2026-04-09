// function display(name="Not available") {
//     console.log("Hello " + name);
// }
// display();

// //a function assigned to a variable it called first class function
// let greet = function (name="Not available") {
//     console.log("Hello " + name);
// }
// greet();

// //Immediately Invoked Function Expression (IIFE)
// (function fetchData() {
//     console.log("Fetching data...");
// })();


// let arrow = () => {
//     console.log("This is an arrow function");
// }
// arrow();

// let add = (a, b) => a + b;
// let res = add(5, 10);
// console.log("The sum is: " + res);

let a = 10;

function calculator(a, b, operation) {
    return operation(a, b);
}

let sub = (a, b) => {
    return a - b;
}
let result = calculator(a, 5, sub);
console.log("The difference is: " + result);


//closure object is created when a function is defined inside another function and the inner function has access to the variables of the outer function even after the outer function has finished executing.

let dummy = 0;
function grand_father() {
    let grand_land = 10;
    function father() {
        let father_land = 5;
        function son() {
            let son_land = 2;
            let total_land = grand_land + father_land + son_land;
            console.log("Total land inherited: " + total_land);
        }
        son();
    }
    father();
}
grand_father();