import React from 'react';
import { Nav } from './components';
import GlobalStyles from './components/GlobalStyle';
import { HomePage } from './pages';

const App = () => {

  return (
    <div className="App"> 
        <GlobalStyles />
        <Nav />
        <HomePage />
    </div>
  );
};


export default App;


