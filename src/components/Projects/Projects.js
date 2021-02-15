import React, {useState, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";

import Toolbar from '../Navigation/Toolbar.js';
import Header from '../Header/Header.js';


const Projects = () => {


  return (
<>
    <Header/>
    <Grid container
      spacing={3}>
          <Grid item xs={3} style={{backgroundColor: 'green'}}>
            <Toolbar/>
          </Grid>
          <Grid item xs={9} style={{backgroundColor: 'orange'}}>hi?</Grid>
    </Grid>
      <p>this is the projects page</p>

  </>
  )
}

export default Projects;