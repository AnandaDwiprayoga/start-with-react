import React from "react";
import image from "./image.jpg";
import Footer from "./footer";

const App = () => (
    <>
        <main>
            <h1>Hello World</h1>
            <h3>Build with react</h3>
            <img src={image} alt="image"/>
        </main>
        <Footer />
    </>
);


export default App;