let arr = [1, 23, 63, 25, 73, 5, 3];

// console.log(arr);
// arr.sort((a, b) => a - b);
// console.log(arr);
// arr.sort((a, b) => b - a);
// console.log(arr);

let filtered_array = arr.filter((e) => {
    return e > 20;
})

console.log(arr);
console.log(filtered_array);

