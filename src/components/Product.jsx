import React from "react";

const Product = (props) => {
    return(
        <div id='product'>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
        
    )
}

// Write a new component Product having the following props: name, description, and price.

// Use at least two instances of this component in your App root component to display them in your app.

// <Product
//   name="Air Fryer K2000"
//   description="The best air fryer to fry all things, even Mars bars"
//   price={2000}
// />
// Note that we need to use the curly brackets to pass a numeric value as a prop, instead of quotes.

export default Product;