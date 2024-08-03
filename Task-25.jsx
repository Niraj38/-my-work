import React from 'react';
import './App.css';

function Task25() {
  const name = "Raj Dav";
  const number = 42;
  const add = number + 10;

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Name: {name}</h1>
          <h2>Number: {number}</h2>
          <h3>Number + 10: {add}</h3>
        </div>
      </header>
    </div>
  );
}

export default Task25;
