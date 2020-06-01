import React from "react";
import "./CountriesRanks.css";
import Country from "./Country/Country";

export default function CountriesRanks() {
  const countries = [
    {position: '1', name: 'China', score: '120'},
    {position: '2', name: 'Japan', score: '100'},
    {position: '3', name: 'Germany', score: '80'},
    {position: '4', name: 'Sweden', score: '60'},
    {position: '5', name: 'UK', score: '40'},
    {position: '6', name: 'Spain', score: '20'}
  ];
    return (
    <div className="CountriesRanks">
      {countries.map(({position, name, score}) => ( 
        <Country 
            position={position} 
            name={name} 
            score={score}
        />))}
    </div>
  );
}