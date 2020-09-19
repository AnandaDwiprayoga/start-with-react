import React from "react";
import "./App.css";
// import commponent
import { Nav,InputMovie,MovieList } from './components';


const App = () => {

  return (
      <div className="App" > 
          <Nav />
          <InputMovie />
          <MovieList />
     </div>   
  );};

export default App;

