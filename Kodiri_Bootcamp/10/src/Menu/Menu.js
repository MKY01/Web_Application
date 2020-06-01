import React, { useState } from "react";
import "./Menu.css";


export default function Menu() {
  const [isVisible, setIsVisible] = useState(false);
    return (
    <div className="Menu">
      <button className="Menu-button" onClick={() => setIsVisible(!isVisible)}>Menu</button>
      <div className={`Menu-links ${isVisible ? 'visible' : ''}`}>
        <div className="item">Home</div>
        <div className="item">Projects</div>
        <div className="item">About</div>
        <div className="item">Contact</div>
      </div>
    </div>
  );
}