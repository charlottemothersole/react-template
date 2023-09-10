import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    }
    const decrementCount = () => {
        setCount(count - 1);
    }

    return(
        <div>
            <button onClick={(incrementCount)}>
                Click me!
            </button>
            <button onClick={(decrementCount)}>
                Decrement
            </button>
            <p role='displayCount'>{count}</p>
        </div>
    )
}

export default Counter;