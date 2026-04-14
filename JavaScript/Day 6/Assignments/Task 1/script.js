let cartItems = [];

let fetchData = async () => {
    try {
        let res = await fetch("https://dummyjson.com/products");
        let data = await res.json();

        if (res.ok) {
            displayData(data.products);
        }
    } catch (error) {
        console.log(error);
    }
};

let displayData = (products) => {
    let list = document.getElementById("productList");
    products.forEach((product) => {
        let li = document.createElement("li");

        li.innerHTML = `${product.title} - ₹${product.price} <button>Add to Cart</button>`;

        let btn = li.querySelector("button");

        btn.addEventListener("click", () => {
            addToCart(product);
        });

        list.appendChild(li);
    });
};

let addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
};

let renderCart = () => {
    let list = document.getElementById("cartList");
    if (!list) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    list.innerHTML = "";

    cart.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.title} - ₹${item.price}<button>Remove</button>`;
        let btn=li.querySelector("button");
        btn.addEventListener("click",()=>{
            removeFromCart(item.id);
        })
        list.appendChild(li);
    });
};

let removeFromCart = (productId) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
};

if (document.getElementById("productList")) fetchData();
if (document.getElementById("cartList")) renderCart();