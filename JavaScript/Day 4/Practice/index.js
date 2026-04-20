// function addSpices() {
//     let addedSpices = true;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (addedSpices) {
//                 console.log("Spices Added");
//                 resolve();
//             } else {
//                 reject("Failed to add spices");
//             }
//         }, 1000);
//     });
// }

// function pourOil() {
//     let pouredOil = true;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (pouredOil) {
//                 console.log("Poured oil");
//                 resolve();
//             } else {
//                 reject("Oil not poured");
//             }
//         }, 3000);
//     });
// }

// function fryOnions() {
//     let onionsFried = false;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (onionsFried) {
//                 console.log("Fried Onions");
//                 resolve();
//             } else {
//                 console.log("Still onion not fried");
//                 reject("Onions not fried");
//             }
//         }, 5000);
//     });
// }

// function addRice() {
//     let addedRice = true;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (addedRice) {
//                 console.log("Rice added");
//                 resolve();
//             } else {
//                 reject("Rice not added");
//             }
//         }, 4000);
//     });
// }

// addSpices()
//     .then(() => pourOil())
//     .then(() => addRice())
//     .then(() => fryOnions())
//     .then(() => addRice())
//     .catch(err => console.log("Error:", err));

//Async and await
// async function cookBiryani{
//     try {
//         await addSpices();
//         await pourOil();
//         await fryOnions();
//         await addRice();
//     }
//     catch (error) {
//         console.log(error);
//     }
// }
// cookBiryani();

// async function fetchData() {
//     try {
//         // let res = await fetch("http://localhost:8080/auth/users"); //response object
//         let res = await fetch("http://localhost:8080/auth/users", {
//             method: "GET",
//             headers: {
//                 "Authorization": "Bearer Token_",
//                 "Content-Type": "application/json"
//             }
//         });
//         console.log(res);
//         if (res.ok) {
//             let data = await res.json();
//             console.log(data);
//         }
//         else {
//             console.log("There is an Http Error");
//         }
//     }
//     catch (error) {
//         console.log("unable to fetch");
//     }
// }
// fetchData();

//DOM-Document Object Model

//document-It is an object presnet inside our browser;

//1.getElementById();
//2.getElementTagName();
//3.getElementClassName();
//4.querrySelector();
//5.querrySelectorAll();

// let heading = document.getElementById("heading");

// let container = document.getElementsByClassName("container");  //Html collection

// let paragraph = document.getElementsByTagName("p");

// let heading1 = document.querySelector("#heading");
// let paragraph = document.querySelector("p");  //first matching will be selected
// let conainter = document.querySelectorAll(".container");

// heading1.innerHTML = "<b>This is change heading</b>";    //it will also execute html tags
// paragraph.textContent = "<b>This is changed paragraph</b>";

// heading1.classList.add("heading");
// console.log(heading1.classList.contains("heading"));
// heading1.classList.toggle("heading");   //if class is not present it will added it present then it remove it
// heading1.classList.remove("heading");


//append()
//remove()
//createElement()


// let ul = document.querySelector(".fruits");
// let kiwi = document.createElement("li")
// let mango = document.createElement("li").textContent = "Mango";
// kiwi.textContent = "Kiwi";

// ul.after("kiwi");


//Event Listener

// let button = document.querySelector("button");

// button.addEventListener('click', () => {
//     console.log("This button got click");
// })

// button.addEventListener('mouseover', () => {
//     console.log("This button got clicked");
// })


//To Do

let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

button.addEventListener("click", () => {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let done = document.createElement("button");
    let inputText = input.value;
    li.textContent = inputText;
    btn.textContent = "Delete";
    done.textContent = "Done";
    li.append(btn,done);
    ul.append(li);
    btn.addEventListener("click", () => {
        li.remove();
    });
    done.addEventListener(("click"), () => {
        li.classList.toggle("strike");
    });
});
