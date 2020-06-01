import React, { useState } from "react";

export default function Daughter({askParent, dinner}) {
    const [daugthersDinner, setDaughtersDinner] = useState("nothing")
    return(
        <div>
            <h1>I am the daugther</h1>
            <p>I want {daugthersDinner} for dinner</p>
            <input onChange={event => setDaughtersDinner(event.target.value)}/>
            <button onClick={() => askParent(daugthersDinner)}>Ask parent</button>
            <p>This is what we are going to have {dinner}</p>
        </div> 
    );
}
