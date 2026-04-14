// let arr = [{ id: 1, name: "Alex" }, { id: 2, name: "Nick" }, { id: 3, name: "John" }];

// let users = JSON.parse(localStorage.getItem("users")) || [];

// console.log(users);
// localStorage.setItem("users", JSON.stringify(arr));

// localStorage.removeItem("users");

let cartItem = [];
let product1 = { id: 1, name: "Product 1", price: 100 };

let product = [
    {
        id: 1,
        name: "Product 1",
        price: 100
    },
    {
        id: 2,
        name: "Product 2",
        price: 200
    },
    {
        id: 3,
        name: "Product 3",
        price: 300
    }
]
let container=document.getElementById("container");
function display() {
    product.map((ele) => {
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let middlebtn = document.createElement("button");

        middlebtn.textContent = "Add to Cart";
        h3.textContent = ele.id;
        h4.textContent = ele.name;
        container.appendChild(h3);
        container.appendChild(h4);
        container.appendChild(middlebtn);
        middlebtn.addEventListener("click", () => {
            addToCart(ele);
        });
    })
}

display();

function addToCart(product) {
    cartItem.push(product);
    console.log(cartItem);
    localStorage.setItem("cart", JSON.stringify(cartItem));
}

document.querySelector("button").addEventListener("click", () => {
    addToCart(product1);
});
console.log(cartItem);
// localStorage.removeItem("");