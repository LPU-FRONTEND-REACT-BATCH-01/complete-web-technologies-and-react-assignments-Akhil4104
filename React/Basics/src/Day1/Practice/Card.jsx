import React from "react";
// const Card = ({ user: { name, age, city } }) => {
// let {user:{name, age, city}} = props;
const Card = (props) => {
    return (
        <div>

            {props.children}
             {/* <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>City: {city}</p> */}
        </div>
    )
}

export default Card;


