import React,{useState} from 'react'

const Counter = () => {
    const [state, setState] = useState({
        count: 0
    });
    
    let handleIncrement = () => {
        setState({
            count: state.count + 1
        });
    }
    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Counter;