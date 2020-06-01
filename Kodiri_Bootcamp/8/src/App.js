import React, { useState } from "react";
import "./App.css";

function Menu() {
  let [isOpen, setIsOpen] = useState(false);
  let [count, setCount] = useState(0);
  return (
    <div>
      <p>Is the menu open? {isOpen ? "Yes" : "No"}</p>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      <br />
      The user clicked {count} times
      <button onClick={() => setCount(count + 1)}>Click!</button>
    </div>
  );
}
class oldMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }
  openMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    let { isOpen } = this.state;
    return (
      <div>
        <p>Is the menu open? {isOpen ? "Yes" : "No"}</p>
        <button onClick={() => this.openMenu()}>Menu</button>
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <h1>Hello evening class!</h1>
      <Menu />
    </div>
  );
}

export default App;
