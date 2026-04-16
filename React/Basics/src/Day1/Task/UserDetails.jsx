import React from "react";

const UserDetails = ({ user: { name, age, city } }) => {
    // let {user:{name, age, city}} = props;
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </div>
    )
}

export default UserDetails;