import React from 'react';
import {Link} from 'react-router-dom';

import {Grid} from "@material-ui/core";
import { Typography } from '@material-ui/core';

import Toolbar from './Navigation/Toolbar.js';
import Header from './Header/Header.js';

const Main = () => {

  return (
  <div >
    <Grid container
      spacing={3}>
          <Grid item xs={12} >
            <Header/>
          </Grid>
          <Grid item xs={3} >
            <Toolbar/>
          </Grid>
          <Grid item xs={9} style={{backgroundColor: '#8A8677'}}>
            <Typography variant='h3'>Welcome!</Typography>
            <Typography variant='body1'>My name is Monica and I am a software engineer</Typography>
          </Grid>
    </Grid>
      <p>this is the main page</p>
      <Link to={'/test'}><button>Test</button></Link>
  </div>
  )


}

export default Main;