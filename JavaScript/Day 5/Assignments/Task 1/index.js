let users = {
    id: 1,
    username: "Nick",
    userLocation: {
        city: "Jalandhar",
        state:"Punjab"
    },
    phone: "23y4242342",
    skills: {
        frontend: ["react", "Html", "Css"],
        backend:["Java","Springboot"]
    }
}

let {id,username,userLocation:{city,state},phone,skills:{frontend,backend}} = users;
console.log(id, username,city,state, phone, frontend, backend);    
