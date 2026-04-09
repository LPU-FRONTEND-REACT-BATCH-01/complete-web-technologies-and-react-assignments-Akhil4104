let username = prompt("Enter username");
let email = prompt("Enter Email");
let password = prompt("Enter Password");

function validate(username, email, password) {
    console.log("Username: " + username.trim().toLowerCase());
    console.log("Email: " + email.toLowerCase());
    console.log(email.split('@'));

    if (password.length > 8 && (password.includes('@') || password.includes('*') || password.includes('/'))) {
        console.log("Password is strong");
    } else {
        console.log("Password is not strong");
    }
}

validate(username, email, password);
