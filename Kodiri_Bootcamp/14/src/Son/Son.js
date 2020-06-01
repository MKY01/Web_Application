import React from "react";
export default function Son(props) {
    return(
        <div>
            <h1>I am the Son</h1>
            <p>I want for dinner {props.daughtersChoice}</p>
            <p>This is what we are going to have {props.dinner}</p>
        </div>
    );
}