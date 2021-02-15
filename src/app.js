import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";
import { Link, Route, Switch } from "react-router-dom";

import Main from './components/Main';
import Contact from './components/Contact/Contact.js';
import Projects from './components/Projects/Projects.js';

import Test from './components/Test/Test.js';


const App = () => {

  return (
    <>
      <Switch>
        <Route exact path='/'><Main/></Route>
        <Route path='/test'><Test/></Route>
        <Route path='/contact'><Contact/></Route>
        <Route path='/projects'><Projects/></Route>
      </Switch>
    </>
  )
}




ReactDOM.render(
<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))

