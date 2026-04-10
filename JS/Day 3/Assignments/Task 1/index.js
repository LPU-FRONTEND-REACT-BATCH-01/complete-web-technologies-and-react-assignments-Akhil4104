let cart_data = [
    {
        id: 1,
        name: "Watch",
        price: 2999,
        quantity: 3
    },
    {
        id: 2,
        name: "Shoes",
        price: 199,
        quantity: 5
    },
    {
        id: 3,
        name: "Earphone",
        price: 299,
        quantity: 10
    },
    {
        id: 4,
        name: "BasketBall",
        price: 100,
        quantity:2
    }
];

cart_data.sort((a, b) => {
    return a.name.localeCompare(b.name);
});

console.log("Sorted by name:", cart_data);

let arr = [...cart_data];
arr.sort((a, b) => {
    return a.price - b.price;
});

console.log("Sorted by price:", arr);

let filteredData = cart_data.filter((e) => {
    return e.price > 2000;
});

console.log("Filtered data:", filteredData);