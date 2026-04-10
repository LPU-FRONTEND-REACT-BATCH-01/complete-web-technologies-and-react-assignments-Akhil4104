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

let users = [
    {
        id: 1,
        username: "Jhon",
        password:"1234"
    },
    {
        id: 2,
        username: "Doe",
        password:"123"
    },
    {
        id: 3,
        username: "Alex",
        password:"12"
    }
]
let inputData = {
    username: "Alex",
    password:"12"
}

let result = users.find(e => e.username === inputData.username);
console.log(result);


// let result = users.some(e => e.username === inputData.username)
// console.log(result);

