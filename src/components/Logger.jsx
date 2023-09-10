import React, { useState } from "react";

const Logger = () => {
    const [text, setText] = useState('');
    const logToConsole = (event) => {
        const newText = event.target.value;
        setText(newText);
        console.log(newText);
    }
    return(
        <div>
            <input role='input' type='text' onChange={(logToConsole)}>
            </input>
        </div>
    );
}

export default Logger;

  // Use an input element and the onChange prop to create a component that will log to the console 
  // everything that is typed into it.