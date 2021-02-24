import React from 'react';
import {Link} from 'react-router-dom';

import {Grid} from "@material-ui/core";
import { Typography } from '@material-ui/core';

import Introduction from './Introduction/Introduction.js'
import Header from './Header/Header.js';

const Main = () => {

  return (
  <div>
    <Grid container
      spacing={3}>
          <Grid item xs={12} >
            <Header/>
          </Grid>

          <Grid item xs={12} >
            <Introduction/>
          </Grid>
    </Grid>
    {
      /*
        <p>this is the main page</p>
        <Link to={'/test'}><button>Test</button></Link>
      */
    }
    </div>
  )
}

export default Main;