import React, { useState } from 'react';
import './App.css';
function Menu() {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => setVisible(!visible)}>Menu!</button>
            {
                visible ?
                    <div className="menu-items">
                        <div className="item">Home</div>
                        <div className="item">Projects</div>
                        <div className="item">Skills</div>
                        <div className="item">Contact</div>
                    </div> :
                    <div></div>
            }
        </div>
    );
}
function Footer() {
    return (
        <div className="item">Copyright WhiteHouse 2020</div>
    );
}
function App() {
    return (
        <div className="App">
            <h1>Hello App</h1>
            <Menu />
            <h1>Welcome to my portfolio!</h1>
            <h5>My name is Donald and I think I got COVID under control :)</h5>
            <Footer />
        </div>
    );
}
export default App;
