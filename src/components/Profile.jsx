import React from "react";

const Profile = (props) => {
    return(
        <div>
            <h3 id='name'>{props.name}</h3>
            <p role='job'>{props.job}</p>
            <p role='birthdate'>{props.birthdate}</p>
        </div>
    )
}


export default Profile;
