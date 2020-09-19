import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import commponent
import { Nav } from "./components";
// import page 
import { AboutPage, ShopPage, HomePage, MealDetailPage } from "./page";


const App = () => {
  return (
    <Router>
      <div className="App" > 
            <Nav />   
            {/* switch digunakan ketika path yang ditemukan sama tidak perlu mengecek route yang lainnya, dikarenakan
              defaultnya route akan mengecek semua route yang ada jika sama akan merendernya.
              Simplenya switch digunakan seperti break pada switch case (kondisi)
            */}
            <Switch>
              {/* property exact digunakan untuk mendisable regex yang ada pada path. defaultnya 
                ketika path sama huruf depan akan dianggap sama walaupun huruf selanjutnya beda, dengan 
                menggunakan property exact pengecekan url harus sama persis dengan path
              */}
              <Route path="/" exact  component={HomePage}/>
              <Route path="/about"  component={AboutPage}/>
              <Route path="/shop" exact component={ShopPage}/>
              <Route path="/shop/:id"  component={MealDetailPage}/>
            </Switch>    
      </div>
    </Router>
  );
};

export default App;


