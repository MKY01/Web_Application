import React from 'react';
import './App.scss';


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logo">Logo</div>
        <div className="title">Our website</div>
        <div className="links">
          <a href="#">Link1</a>
          <a href="#">Link1</a>
          <a href="#">Link1</a>
          <a href="#">Link1</a>
        </div>
      </header>
      <main className="main">
        <aside>News</aside>
        <article>Text</article>
      </main>
      <footer className="footer">
        <div className="links">
          <a href="#">Link1</a>
          <a href="#">Link1</a>
          <a href="#">Link1</a>
          <a href="#">Link1</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
