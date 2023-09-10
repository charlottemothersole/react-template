import React, { useState } from "react";

const Die = () => {
    const [number, setNumber] = useState();
    const throwDice = () => {
        // const dieNumbers = [1,2,3,4,5,6];
        setNumber(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
    }
    return(
        <div>
            <button onClick={(throwDice)}>Throw the dice!</button>
            <p>You rolled a {number}.</p>
        </div>
    );
}

// Using what you learned about state in the previous section, along with the onClick prop, create a new 
// component <Die /> to represent rolling a die. It should have a button, and when pressed, a new random 
// integer between 1 and 6 should be generated, stored in state, and presented on the page. Each time the
//  button is pressed, a new roll should be presented.
export default Die;