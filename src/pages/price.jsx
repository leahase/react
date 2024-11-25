import { useState } from 'react';

function Counter() {
    const [count, changeCount] = useState (0);
    const increment = () => {
        changeCount(count + 1);
    };
    const decrement = () => {
        changeCount(count - 1);
    };
    const reset = () => {
        changeCount(0);
    };
    return (
        <div className='button-container'>
        <div className='button-box'>
            <button onClick={increment}>Add One</button>
            <button onClick={decrement}>Put One Away</button>
            <button onClick={reset}>Reset Button</button>
            <h2>Price: {count}</h2>
        </div>
        </div>
    )
}


export default Counter;