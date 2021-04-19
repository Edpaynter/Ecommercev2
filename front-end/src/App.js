import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Features2 from "./components/Features/Features2";
import Features3 from "./components/Features/Features3";
import Quote from "./components/Quote/Quote";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <Header />
          <Contact />
          <Footer />
        </Route>
        <Route path="/">
          <Header />
          <About />
          <Features />
          <Quote />
          <Features2 />
          <Features3 />

          <Footer />
         
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
