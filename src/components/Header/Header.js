import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



import ProfileIcon from '@material-ui/icons/HomeTwoTone';
import ContactIcon from '@material-ui/icons/AlternateEmailTwoTone';
import OctoCat from '@material-ui/icons/GitHub';
import Cute from '@material-ui/icons/EmojiNatureTwoTone';

const Header = () => {

  return (
    <div style={{backgroundColor: '#5EA65C'}}>
       <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="inherit">Login</Button>

          <Link to={'/'}><ProfileIcon color='secondary' fontSize='large'/></Link>
          <Link to={'/contact'}><ContactIcon color='secondary' fontSize='large'/></Link>
          <Link to={'/projects'}><OctoCat color='secondary' fontSize='large'/></Link>
          <Cute color='secondary' fontSize='large'/>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
