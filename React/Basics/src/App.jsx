// import React, { Component, useState } from 'react';

//Day 1

// import Card from './Day1/Practice/Card';


// export default class App extends Component{
//     render() {
//         return (
//             <h1>Hello</h1>
//         );
//     }
// }

// let App = () => {
//     // let card1 = "This is card 1";
//     // let card2 = "This is card 2";

//     let user1 = {
//         id: 1,
//         name: "Alex",
//         age: 30,
//         city: "New York"
//     }
//     let user2={
//         id: 2,
//         name: "john",
//         age: 25,
//         city: "Los Angeles"
//     }
//     let user3={
//         id: 3,
//         name: "bob",
//         age: 35,
//         city: "Chicago"
//     }
//     return (
//         <>
//             <Card user={user1}>
//                 <h1>User 1</h1>
//             </Card>
//             <Card user={user2}>
//                 <h1>User 2</h1>
//             </Card>
//             <Card user={user3}>
//                 <h1>User 3</h1>
//             </Card>
//         </>
//     );
// }
// export default App;





// Day 20
// import Password from './Day2/Practice/Password'; 
// import Image from './Day2/Task/Image';

// const App = () => {

    // const [state, setState] = useState({
    //     count:0
    // })

    // let normal = 0;

    // let handleNormal = () => {
    //     normal++;
    //     console.log("Normal variable: ", normal);
    // }
    // let handleIncrement = () => {
    //     setState({
    //         count: state.count + 1
    //     });
    // }
    // let handleDecrement = () => {
    //     setState({
    //         count: state.count - 1
    //     });
    // // }
    // return (
    //     <div>
    //         <Image/>
            {/* <Password/> */}
            {/* <h1>This is a state variable: {state.count}</h1>
            <h1>This is a normal variable: {normal}</h1>
            <button onClick={handleNormal}>Increment Normal</button>
            <button onClick={handleIncrement}>Increment State</button>
            <button onClick={handleDecrement}>Decrement State</button> */}
//         </div>
//     )
// }

// export default App;


// import React, {useState, useEffect } from 'react'

// const App = () => {
//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         console.log("Component mounted");
//     }, [count]);
//     console.log("Component rendered");
   

//     let handleCount = () => {
//         setCount(prev => prev + 1);
//     }

//   return (
//       <div>
//           <h1>Count: {count}</h1>
//           <button onClick={handleCount}>Increment</button>
//     </div>
//   )
// }

// export default App;

// import React from 'react'
// import Slider from './Day2/Task/Slider';

// const App = () => {
//   return (
//     <Slider/>
//   )
// }

// export default App;



//Day 3
import React from 'react'
import Controlled from './Day3/Practice/Controlled';
// import FetchingData from './Day3/Practice/FetchingData';
const App = () => {
  return (
    <Controlled/>
  )
}
export default App;