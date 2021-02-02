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
          <Route  path="/" component={About} />
          {/* <Route><Link exact path="/About" component={About} /></Route> */}
          <NavLink to="/about" component={About}></NavLink>
          <Route  path="/Portfolio" component={Portfolio} />
          <Route  path="/Contact" component={Contact} />
          </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
