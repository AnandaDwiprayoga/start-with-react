import React from "react";
import "./App.css";
import { MovieProvider } from "./ContextApi/movie-context";
// import commponent
import { Nav, MovieList,InputMovie } from "./components";

const App = () => {

  return (
    <MovieProvider >
      <div className="App" > 
          <Nav />
          <InputMovie />
          <MovieList />
     </div>
   </MovieProvider>
  );
};

export default App;

