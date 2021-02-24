import React, {useState, useEffect} from 'react';
import Grid from "@material-ui/core/Grid";

import Typography from '@material-ui/core/Typography';

const Introduction = () => {


  return (
    <Grid container spacing={5}>
      <Grid item xs={6} >

        <Typography variant='h3'>HELLO THERE!</Typography>
        <Typography variant='body2' align='justify'>Hello, my name is Monica and I'm a software engineer. I love love building applications that improve people's lives. I love picking up new technologies while honing and improving my current skills. I am very versatile and am seeking a company to build a long-term career with. Welcome to my website and thanks for stopping by!</Typography>
      </Grid>
      <Grid item xs={6}>
        <img src='https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80' style={{ width:'100%'}}></img>
      </Grid>

    </Grid>

  )
}

export default Introduction;