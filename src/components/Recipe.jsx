import React from "react";

const Recipe = (props) => {
    return(
        <div>
            <p role='title'>{props.title}</p>
            <p role='duration'>{props.duration}</p>
            <p role='type'>{props.type}</p>
        </div>
    )
}

export default Recipe;