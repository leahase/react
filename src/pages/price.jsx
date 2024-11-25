import { useState } from 'react';

function Counter() {
    let [count, changeCount] = useState (0);
    const increment = () => {
        count++;
        console.log(count);
    }
    const decrement = () => {
        count --;
        console.log(count);
    }
    const reset = () => {
        count = 0;
        console.log(count);
    }
    return (
        <div>
            <button onClick={increment}>Add One</button>
            <button onClick={decrement}>Put One Away</button>
            <button onClick={reset}>Reset Button</button>
            <h2>Price:</h2>
        </div>
    )
}


export default Counter;