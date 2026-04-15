// let arr = [{ id: 1, name: "Alex" }, { id: 2, name: "Nick" }, { id: 3, name: "John" }];

// let users = JSON.parse(localStorage.getItem("users")) || [];

// console.log(users);
// localStorage.setItem("users", JSON.stringify(arr));

// localStorage.removeItem("users");

let cartItem = JSON.parse(localStorage.getItem("cart")) || [];

let product = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 }
];

let container = document.getElementById("container");

function display() {
    product.forEach((ele) => {
        let h3 = document.createElement("h3");
        let h4 = document.createElement("h4");
        let btn = document.createElement("button");

        h3.textContent = ele.id;
        h4.textContent = ele.name;
        btn.textContent = "Add to Cart";

        btn.addEventListener("click", () => {
            addToCart(ele);
        });

        container.append(h3,h4,btn);
    });
}

display();

function addToCart(item) {
    cartItem.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItem));
    console.log("Cart:", cartItem);
}
// localStorage.removeItem("cartItem");


