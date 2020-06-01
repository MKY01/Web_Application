import React, { useState } from "react";
import "./App.css";
import Daughter from "./Daughter/Daughter";
import Son from "./Son/Son";

function App() {
  const [daughtersChoice, setDaughtersChoice] = useState("nothing");
  const [dinner, setDinner] = useState("nothing");
  return (
    <div className="App">
      <h1>Hi, I am the parent</h1>
      <p>My children want {daughtersChoice}</p>
      <p>I am going to cook {dinner}</p>
      <input onChange={event => setDinner(event.target.value)}/>
      <Daughter askParent={meal => setDaughtersChoice(meal)} dinner={dinner}/>
      <Son daughtersChoice={daughtersChoice} dinner={dinner}/>
    </div>
  );
}

export default App;
