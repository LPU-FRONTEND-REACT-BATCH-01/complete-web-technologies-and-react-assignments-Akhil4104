let username = prompt("Enter username: ");
let email = prompt("Enter email: ");
let password = prompt("Enter password: ");
const objectCreator = (username, email, password) => {
    return {
        username: username,
        email: email,
        password: password
    };
};
console.log(objectCreator(username,email,password));