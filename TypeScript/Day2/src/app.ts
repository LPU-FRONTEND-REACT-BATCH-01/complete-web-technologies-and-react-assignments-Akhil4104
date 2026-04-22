// let obj: { id: number; name: string } = {
//     id: 1,
//     name: "John",
// }
// console.log(obj.id);
// console.log(obj.name);

// let obj1:{}=  expect null and undefined it can accept any type of value


// let obj2: object = {
//     id: 1,
//     name: "John",
// }
// console.log(obj2);

// let obj3: Object = {
//     id: 1,
//     name: "John",
// }
// console.log(obj3);


// let users: { id: number; name: string; age: number; } = {
//     id: 1,
//     name: "John",
//     age: 30
// }

// let fun = (a: number, b: number) => a + b

// function fun1(a: number, b: number) {
//     return a + b;
// }


// interface User {
//     id: number;
//     name: string
// }

// class User1 implements User {
//     id: number;
//     name: string;
//     constructor(id: number, name: string) {
//         this.id = id;
//         this.name = name;
//     }
// }

// let user1: User = {
//     id: 1,
//     name: "John"
// }



// interface product{
//     id: number;
//     title: string;
//     price: number;
// }

// let product1: product[] = [
//     {
//         id: 1,
//         title: "Watch",
//         price: 100
//     }
// ];

// product1.push({
//     id: 2,
//     title: "Phone",
//     price: 500
// });

// product1.push({
//     id: 3,
//     title:"Laptop"
// });

// console.log(product1);
// console.log(product1[0].id);
// console.log(product1[0].title);
// console.log(product1[0].price);


// console.log(product1[1].id);
// console.log(product1[1].title);
// console.log(product1[1].price);

// function display(name: string):never {
//     throw new Error("It is an error");
//     console.log("This is end of function");
// }


// type Users = {
//     id: number;
//     name: string;
// }

// let users1: Users = {
//     id: 1,
//     name: "John"
// }

// type n = number;
// let a: n = 2;

// type Admin = "Admin";

// let user: Admin = "Admin";

// type numString = [number, String]

// let a: numString = [1, "hi"];

// function display(name: string, age: number,email:string="Not provided") {
//     console.log(`Name: ${name}, Age: ${age},Email:${email}`);
// }

// display("John", 30);


// type Add = (a: number, b: number) => number;

// let addition: Add = (a, b) => {
//     return a + b;
// }
// addition(2, 3);

// type PaymentMethod = "UPI" | "Card" | "COD" | "NetBanking";

// type Payment = (modeOfPayment: PaymentMethod) => number | string;

// let payment: Payment = (modeOfPayment) => {
//     let discount: number = 0;
//     let cash: number = 0;

//     if (modeOfPayment === "UPI") {
//         discount = 10;
//         return discount;
//     } else if (modeOfPayment === "Card") {
//         discount = 5;
//         return discount;
//     } else if (modeOfPayment === "COD") {
//         cash += 50;
//         return cash;
//     } else if (modeOfPayment === "NetBanking") {
//         return "Nothing";
//     }

//     return 0;
// };

// console.log(payment("UPI"));


//fetch sort by price>5$ store in array  price >10$   and names[A-Z] store in array name[Z-A] store in array adn category mens shirts store in array and beauty store in array

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
}

async function fetchProducts() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data: { products: Product[] } = await response.json(); 
        const products = data.products;

        const arr1: Product[] = products.filter(p => p.price > 5); 
        const arr2: Product[] = products.filter(p => p.price > 10);

        const arr3: Product[] = [...products].sort((a, b) =>
            a.title.localeCompare(b.title)
        );

        const arr4: Product[] = [...products].sort((a, b) =>
            b.title.localeCompare(a.title)
        );

        const mensShirts: Product[] = products.filter(
            p => p.category === "mens-shirts"
        );

        const beauty: Product[] = products.filter(
            p => p.category === "beauty"
        );

        console.log(arr1);
        console.log(arr2);
        console.log(arr3);
        console.log(arr4);
        console.log(mensShirts);
        console.log(beauty);
    } catch (error) {
        console.log(error);
    }
}
fetchProducts(); 

