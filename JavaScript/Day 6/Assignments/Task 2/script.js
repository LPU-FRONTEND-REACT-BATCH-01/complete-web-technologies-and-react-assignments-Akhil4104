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
}

let displayData = (products) => {
    let list = document.getElementById("productList");
    list.innerHTML = "";
    products.forEach((product) => {
        let li = document.createElement("li");
        li.innerHTML = `${product.title} - ₹${product.price} <button>Add to Cart</button>`;
        let btn = li.querySelector("button");
        btn.addEventListener("click", () => {
            addToCart(product);
        });
        list.appendChild(li);
    });
}

let addToCart = (product) => {
    cartItems.push(product);
    renderCart();
}

let removeFromCart = (product) => {
    cartItems = cartItems.filter((item) => item.id !== product.id);
    renderCart();
}

let renderCart = () => {
    let list = document.getElementById("cartList");
    list.innerHTML = "";    
    cartItems.forEach((item) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.title} - ₹${item.price}<button>Remove</button>`;
        let removeBtn = li.querySelector("button");
        removeBtn.addEventListener("click", () => {
            removeFromCart(item);
        });
        list.appendChild(li);
    });
}


fetchData();