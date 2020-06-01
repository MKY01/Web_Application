import React from "react";
import "./Country.css";

export default function Country({position, name, score}) {
    return(
        <div className="Country">
            <div className="position">{position}</div>
            <div className="name">{name}</div>
            <div className="score">{score}</div>
        </div>
    );
}