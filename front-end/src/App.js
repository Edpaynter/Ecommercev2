import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Features2 from "./components/Features/Features2";
import Features3 from "./components/Features/Features3";
import Quote from "./components/Quote/Quote";
// import Video from "./components/Video/Video";
// import StorePreview from "./components/StorePreview/StorePreview";
// import ProductCounter from "./components/ProductCounter/ProductCounter";
// import TeamTiles from "./components/TeamTiles/TeamTiles";
// import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import StoreFront from './components/StoreFront/StoreFront'
import { Iframe } from "./components";
// import AppointmentScheduler from "./components/AppointmentScheduler/AppointmentScheduler"
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

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
          {/* <MuiThemeProvider>
          <AppointmentScheduler />
          </MuiThemeProvider> */}
          <About />
          <Features />
          <Quote />
          <Features2 />
          <Features3 />
          {/* <Video /> */}
          {/* <StorePreview /> */}
          {/* <ProductCounter /> */}
          {/* <TeamTiles /> */}
          {/* <Partners /> */}
         
          <Footer />
          
         
        </Route>
      </Switch>
    </Router>
    // <StoreFront />
  );
}

export default App;
