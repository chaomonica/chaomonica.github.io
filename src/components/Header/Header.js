import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import { AppBar } from '@material-ui/core';
import {Grid} from "@material-ui/core";


import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#93ACB0"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
       <AppBar position="static"  className={classes.root}>
        <Toolbar>
          <Grid container>
            <Grid item xs={9}>
            </Grid>

            <Grid item xs={3} style={{
              display:'flex',
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems:"flex-end"}}>
              <Link to={'/'}> <Typography style={{marginLeft:10}}>HOME</Typography></Link>

              <Link to={'/projects'}><Typography style={{marginLeft:10}}>PROJECTS</Typography></Link>

              <Link to={'/contact'}><Typography style={{marginLeft:10}}>CONTACT</Typography></Link>

            </Grid>

        </Grid>
        </Toolbar>
      </AppBar>
  )
}

export default Header;
