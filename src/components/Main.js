import React from 'react';
import {Link} from 'react-router-dom';

import Grid from "@material-ui/core/Grid";

import Toolbar from './Navigation/Toolbar.js'

const Main = () => {

  return (
  <>
    <Grid container
      spacing={1}>
          <Grid item  xs={3} style={{backgroundColor: 'green'}}>hi?</Grid>
          <Grid item xs={9} style={{backgroundColor: 'orange'}}>hi?</Grid>


    </Grid>
      <p>this is the main page</p>
      <Link to={'/test'}><button>Test</button></Link>
      <Toolbar/>
  </>
  )


}

export default Main;