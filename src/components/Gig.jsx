import React, { useState } from "react";
import "./Gig.css";

const Gig = (props) => {
    return (
        <div id='gig' className='gig' role='gig'>
            <button onClick={props.addToFavourites}>Favourite</button>
            { props.favourite ? <p>❤️Added to favourites!❤️</p> : ''}
            <h3 id='artist'>Artist: {props.artist}</h3>
            <img height='300px' src={props.img}/>
            <p id='description'>Description: {props.description}</p>
            <p id='when'>When: {props.when}</p>
            <p id='where'>Where: {props.where}</p>
        </div>
    )
}

const AllGigs = () => {
    let allGigs = [
        {
        artist:'Avicii', 
        img:'https://www.rollingstone.com/wp-content/uploads/2018/06/avicii-interview-rolling-stone-91816b43-19e9-4ef2-8a1e-857428f69960.jpg?w=1581&h=1054&crop=1',
        description:'This is the brilliantly creative description!' ,
        when:'Midday 1st January 2024', 
        where:'Brighton Beach',
        favourite: false
        },
        {
        artist:'Sigala',
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSigala&psig=AOvVaw3zGfDzKVKPbBxsUaXG-kCM&ust=1693829256052000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCICIyuqzjoEDFQAAAAAdAAAAABAE',
        description:'This is the brilliantly creative description!',
        when:'Now',
        where:'The kitchen',
        favourite: false
        }
    ];
    const [favourite, setFavourite] = useState(false);
    const addToFavourites = (index) => {
        setFavourite(true);
    }
    let favouriteGigs = [];
    favouriteGigs = allGigs.filter((gig) => gig.favourite == true);
    let otherGigs = [];
    otherGigs = allGigs.filter((gig) => gig.favourite == false);
    // console.log('favourites',favouriteGigs);
    return(
        {  }
        // <Gig key={index} addToFavourites={() => addToFavourites(index)}/> 
    );
}
// Update your gig application so that the Gig component doesn't have any state of its own. Instead, "lift" 
// the state of the gigs into a parent component. Write some code so that instead of listing all gigs 
// together, "favourited" gigs are above other gigs.

export default AllGigs;