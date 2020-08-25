import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Edit from './component/upload/Edit'
import ListComp from './component/upload/ListComp'
import Upload from './component/upload/Upload.jsx'
import Login from './component/Login/login';

function Admin() {

  // const timeout = { enter: 800, exit: 400 }

  return (

    <BrowserRouter>
        <Switch>
        <Route exact path='/admin/home' component={ListComp} />
        <Route exact path='/admin/add' component={Upload} />
        <Route exact path='/admin/edit' component={Edit} />
        <Route exact path='/admin' component={Login}/>
        </Switch>
    </BrowserRouter>

   
  );
}

export default Admin;
