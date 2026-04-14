let users = [
    {
        id: 1,
        username: "Jhon",
        password:"1234"
    },
    {
        id: 2,
        username: "Doe",
        password:"123"
    },
    {
        id: 3,
        username: "Alex",
        password:"12dnk"
    }
]
let inputData = {
    username: "Alex",
    password:"12dnk"
}


let result = users.some(e => e.username === inputData.username);
if (result) {
    let user = users.find(
        e => e.username === inputData.username
    );
    if (user.password !== inputData.password) {
        console.log("Invalid Password");
    } else {
        console.log("Home");
    }

}
else {
    console.log("User not found");
}