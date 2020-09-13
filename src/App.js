import React from 'react';
import './App.css';

// import components
import Nav from './components/Nav';
import Tweets from './components/Tweets';

const App = () => (
  <div className="App"> 
    <h1>Hello React</h1>
    <div className="home">
      <Nav />
      <Tweets />
    </div>
  </div>
);

export default App;


