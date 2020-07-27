import React from 'react';
// import logo from './logo.svg';
import NavbarComp from './component/home/Navbar'
import home from './component/home/home.jsx'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Gallery from './component/home/Gallery';
import About from './component/home/About';
import Home from './component/home/home.jsx';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
