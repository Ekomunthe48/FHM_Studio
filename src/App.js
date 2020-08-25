import React from 'react';
import NavbarComp from './component/home/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Gallery from './component/home/Gallery'
import About from './component/home/About'
import Home from './component/home/home.jsx'
import Edit from './component/upload/Edit'
import ListComp from './component/upload/ListComp'
import Upload from './component/upload/Upload.jsx'
import { ButtonBase } from '@material-ui/core'
import ButtonBases from './component/home/test'
import test from './component/home/test'
import InputWithIcon from './component/Login/login'
import Login from './component/Login/login';

function App() {

  // const timeout = { enter: 800, exit: 400 }

  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        {/* Application */}
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/about" component={About} />    

        
        {/* Admin */}
        <Route exact path='/admin' component={Login}/>
        <Route exact path='/admin/home' component={ListComp} />
        <Route exact path='/admin/add' component={Upload} />
        <Route exact path='/admin/edit' component={Edit} />

        {/* <Route exact path='/test' component={test} /> */}
      </Switch>
    </BrowserRouter>
   
  );
}

export default App;
