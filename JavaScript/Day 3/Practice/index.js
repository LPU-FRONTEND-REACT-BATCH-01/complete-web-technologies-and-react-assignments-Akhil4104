// let arr = [1, 23, 63, 25, 73, 5, 3];

// console.log(arr);
// arr.sort((a, b) => a - b);
// console.log(arr);
// arr.sort((a, b) => b - a);
// console.log(arr);

// let filtered_array = arr.filter((e) => {
//     return e > 20;
// })

// console.log(arr);
// console.log(filtered_array);

// let arr = ["Apple", "Kiwi", "Banana"];
// let result = arr.some(e => e == "Apple");
// console.log(result);

// let users = [
//     {
//         id: 1,
//         username: "Jhon",
//         password:"1234"
//     },
//     {
//         id: 2,
//         username: "Doe",
//         password:"123"
//     },
//     {
//         id: 3,
//         username: "Alex",
//         password:"12"
//     }
// ]
// let inputData = {
//     username: "Alex",
//     password:"12"
// }

// let result = users.find(e => e.username === inputData.username);
// console.log(result);


// let result = users.some(e => e.username === inputData.username)
// console.log(result);


// let original_Object = {
//     id: 1,
//     name: "Nick",
//     city:"Pune"
// }

// let duplicate = structuredClone(original_Object);

// let duplicate = { ...original_Object };
// original_Object.state = "Maharashtra"
// console.log(original_Object);
// console.log(duplicate);

// let arr = [1, 34, 2334, 12, 12];
// let duplicate = [...arr,"Byee"];
// arr.push("hello");

// console.log(duplicate);

// console.log(arr);

// function numbers(...number) {
//     console.log(number);
// }
// numbers(21, 10, 28, 38);

// console.log("Start");

// setTimeout(() => {
//     console.log("First Statement Executed");
// }, 2000)
// console.log("End");


// setTimeout(() => {
//     console.log("A");
// }, 3000)
// setTimeout(() => {
//     console.log("B");
// }, 500)
// setTimeout(() => {
//     console.log("C");
// },2000)


function turnonStove(callback) {
    setTimeout(() => {
        console.log("Stove is Ignited");
        callback();
    },2000)
}
function placeBowl(callback) {
    setTimeout(() => {
        console.log("Placed the bowl");
        callback();
    },1000)
}
function pourOil(callback) {
    setTimeout(() => {
        console.log("Placed the bowl");
        callback();
    },3000)
}
function fryOnions(callback) {
    setTimeout(() => {
        console.log("Spices Added");
        callback();
    },5000)
}
function addSpices(callback) {
    setTimeout(() => {
        console.log("Spices Added");
        callback();
    },1000)
}
function addRice() {
    setTimeout(() => {
        console.log("Rice Added");
    },4000)
}

