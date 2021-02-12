import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";

import Main from './components/Main';

import Test from './components/Test/Test.js';


const App = () => {

  return (
    <>
      <Switch>
        <Route exact path='/'><Main/></Route>
        <Route path='/test'><Test/></Route>
      </Switch>
    </>
  )
}




ReactDOM.render(
<HashRouter><App /></HashRouter>, document.getElementById('app'))

