import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import { AboutPage, ContactUsPage, MovieDetailPage, OurWorkPage } from './pages';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Nav } from './components';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  //get key and location page
  const location = useLocation();

  return (
    <div className="App"> 
      <GlobalStyle />
        <Nav />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
              <Route path="/" exact >
                <AboutPage />
              </Route>
              <Route path="/ContactUs" >
                <ContactUsPage/>
              </Route>
              <Route path="/OurWork" >
                <OurWorkPage/>
              </Route>
              <Route path="/work/:id" >
                <MovieDetailPage/>
              </Route>
          </Switch>
        </AnimatePresence>
    </div>
  );
};

export default App;


