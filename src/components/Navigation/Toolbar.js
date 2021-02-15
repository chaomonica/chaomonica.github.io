import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import ProfileIcon from '@material-ui/icons/HomeTwoTone';
import ContactIcon from '@material-ui/icons/AlternateEmailTwoTone';
import OctoCat from '@material-ui/icons/GitHub';


import Cute from '@material-ui/icons/EmojiNatureTwoTone';



const Toolbar = () => {

  return (
    <div style={{backgroundColor: '#5EA65C'}}>
      <img src='./cathat.jpg' style={{borderRadius:'50%', width:'100%'}}></img>


      <br></br>
      <Link to={'/'}><ProfileIcon color='primary' fontSize='large'/></Link>
      <br></br>
      <Link to={'/contact'}><ContactIcon color='primary' fontSize='large'/></Link>
      <br></br>
      <Link to={'/projects'}><OctoCat color='primary' fontSize='large'/></Link>
      <br></br>
      <Cute color='primary' fontSize='large'/>
    </div>
  )
}

export default Toolbar;
