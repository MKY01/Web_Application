import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./App.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
function App() {
  const [index, setIndex] = useState(0);
  const handleChangeIndex = index => setIndex(index);
  return (
    <div className="App">
      <SwipeableViews enableMouseEvents>
        <div className="slide slide1">slide n°1</div>
        <div className="slide slide2">slide n°2</div>
        <div className="slide slide3">slide n°3</div>
      </SwipeableViews>
      <AutoPlaySwipeableViews index={index} onChangeIndex={() => handleChangeIndex()}>
        <div className="slide slide1">slide n°1</div>
        <div className="slide slide2">slide n°2</div>
        <div className="slide slide3">slide n°3</div>
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default App;
