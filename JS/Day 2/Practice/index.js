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

// let a = 10;

// function calculator(a, b, operation) {
//     return operation(a, b);
// }

// let sub = (a, b) => {
//     return a - b;
// }
// let result = calculator(a, 5, sub);
// console.log("The difference is: " + result);


//closure object is created when a function is defined inside another function and the inner function has access to the variables of the outer function even after the outer function has finished executing.

// let dummy = 0;
// function grand_father() {
//     let grand_land = 10;
//     function father() {
//         let father_land = 5;
//         function son() {
//             let son_land = 2;
//             let total_land = grand_land + father_land + son_land;
//             console.log("Total land inherited: " + total_land);
//         }
//         son();
//     }
//     father();
// }
// grand_father();


// let age = 21
// let name=`your age is ${age}, you are eligible to vote.`
// console.log("your age is " + age + ", you are eligible to vote.");


// let names = "John Doe";
// let str = "Hello";
// console.log(names.toLowerCase())
// console.log(names.trim());
// console.log(names.split(","));
// console.log(names.length);
// console.log(names.replace('a', 'k'));
// console.log(names.replaceAll('a', 'k'));
// console.log(names.charAt(2));
// console.log(str.slice(3, 4));
// console.log(str.includes('z'));


// let user_data = {
//     id: 1,
//     name: "Jhon",
//     "age":12
// }

// Object.freeze(user_data);
// Object.seal(user_data);
// user_data.city = "Delhi";
// console.log(user_data);
// console.log(user_data.id);
// console.log(user_data.name);
// console.log(user_data.age);
// console.log(user_data["age"]);

// let keys = Object.keys(user_data);
// console.log(keys);

// let values = Object.values(user_data);
// console.log(values);

// let pairs = Object.entries(user_data);
// console.log(pairs);

// let arr = [12, "hello", true, undefined]

// console.log(arr);

// arr.push(21)
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(1);
// console.log(arr);

// console.log(arr.length);

// console.log(arr.at(3));

// console.log(arr.join("-"));

// let arr1 = [1, 2, 3];
// let arr2 = ["hello", "bye"];
// console.log(arr.concat(arr1, arr2));

let arr = ["hi", "hello", "bye"];
let arr1 = [1,2,3,4,5,6];
// arr1.map((value, index)=>{
//     console.log(value*2);
// })

let total = arr1.reduce((prev, curr) => {
    return prev + curr;
})
console.log(total);


let cart_data = [
    {
        id: 1,
        name:"Watch",
        price:2999
    },
    {
        id: 2,
        name: "Shoes",
        price: 199
    },
    {
        id: 3,
        name:"Earphone",
        price:299
    }
]
let total_amount = cart_data.reduce((prev, value) => {
    return prev + value.price;
},0)

console.log(total_amount);