import React from 'react';
import megaShark from './megaShark.jpg'; // camel snake pascal case according to ECMAScript -> TC-39
import sharkTopus from './sharkTopus.jpg';
import sharkExorcist from './sharkExorcist.jpg';
import './App.css';


function Movie(props){
  return <div>
      <h3>{props.title}</h3>
      <img src={props.image} />
  </div>
}


function App() {
  return (
    <div className="App">
      <h1>Best Movies</h1>
      <Movie title='Megashark vs Crocosaurus' image={megaShark} />
      <Movie title='SharkTopus' image={sharkTopus} />
      <Movie title='Shark Exorcist' image={sharkExorcist} />
    </div>
  );
}

export default App;
