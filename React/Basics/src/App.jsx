import React, { Component } from 'react';
import Card from './Day1/Practice/Card';

// export default class App extends Component{
//     render() {
//         return (
//             <h1>Hello</h1>
//         );
//     }
// }

let App = () => {
    // let card1 = "This is card 1";
    // let card2 = "This is card 2";

    let user1 = {
        id: 1,
        name: "Alex",
        age: 30,
        city: "New York"
    }
    let user2={
        id: 2,
        name: "john",
        age: 25,
        city: "Los Angeles"
    }
    let user3={
        id: 3,
        name: "bob",
        age: 35,
        city: "Chicago"
    }
    return (
        <>
            <Card user={user1} />
            <Card user={user2} />
            <Card user={user3} />
        </>
    );
}
export default App;

