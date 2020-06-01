import React from 'react';
import Title from './Title/Title.js';
import './App.css';

function Team(props) {
  return (
    <div>
        <h3>{props.name}</h3>
        <div>National titled: {props.titles}</div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Title />
      <Team name="ManU" titles="45"/>
      <Team name="Arsenal" titles="24"/>
    </div>
  );
}

export default App;
