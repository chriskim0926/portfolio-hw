import React from 'react';
import './App.css';
import Wrapper from "./components/wrapper/wrapper"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/navbar/navbar"
import About from "./pages/about"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"

function App() {
  return (
    <Router>
      <Nav />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={About} />
          {/* <Route><Link exact path="/About" component={About} /></Route> */}
          <Link to="/about" component={About}></Link>
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
