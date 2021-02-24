import React, {useState, useEffect} from 'react';

import {Grid} from "@material-ui/core";
import {Typography} from '@material-ui/core';

import emailjs from 'emailjs-com';


import Header from '../Header/Header.js';


import styled from 'styled-components'
const Input = styled.input`
  margin-bottom: 5px;

`
const Contact = () => {

  const handleSend = (e) => {
    e.preventDefault();

    console.log(e.target)

    //emailjs.sendForm(serviceID, templateID, templateParams, userID)
    // emailjs.sendForm(env.serviceID, env.templateID, e.target, env.userID)
    //   .then((result) => {
    //       console.log('sent!')
    //       console.log(result.text);
    //   }, (error) => {
    //     console.log('error: ', error)
    //       console.log(error.text);
    //   });

        emailjs.sendForm(process.env.serviceID, process.env.templateID, e.target, process.env.userID)
      .then((result) => {
          console.log('sent!')
          console.log(result.text);
      }, (error) => {
        console.log('error: ', error)
          console.log(error.text);
      });

  }

  return (
    <div>
      <Header/>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={4}></Grid>
        <Grid item xs={4} >
          <header style={{fontSize: "5vw", textAlign:"center"}} >Contact Me!</header>

           <img src='./cat.jpg' style={{borderRadius:'20%', width:'100%'}}></img>
            <form className="contact-form" onSubmit={handleSend}>
              <input type="hidden" name="contact_number" />


              <Input type="text" name="name" placeholder='Name' style={{width:'100%'}}/>
              <br></br>


              <Input type="email" name="email" placeholder='Email address' style={{width:'100%'}}/>
              <br></br>

              <Input type="text" name="subject" placeholder='Subject' style={{width:'100%'}}/>
              <br></br>

              <textarea name="message" placeholder='Your message'style={{width:'100%', maxWidth:'100%', minWidth: '100%'}}/>
              <br></br>

              <input type="submit" value="Send Message" />
          </form>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>

  )
}

export default Contact;

/*
  //  WORKS!!!!!

   <div>
       <form className="contact-form" onSubmit={handleSend}>
      <input type="hidden" name="contact_number" />

      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>

*/


/*


     <Grid container spacing={3} alignItems="center">
        <Grid item xs={12}>
          <Header/>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h2'> CONTACT ME</Typography>
        </Grid>

        <Grid item xs={12} >
          <form noValidate autoComplete="off" className={classes.root} onSubmit={handleSend}>

            <TextField id="outlined-basic" name="name" label="Name" variant="outlined" className={classes.textField} onInput={e => setName(e.target.value)}/>
            <br></br>
            <TextField id="outlined-basic" name="email" label="Email Address" variant="outlined" className={classes.textField}
            onInput={e => setEmail(e.target.value)}/>
            <br></br>
            <TextField id="outlined-basic" label="Subject" variant="outlined" className={classes.textField}
            onInput={e => setSubject(e.target.value)}/>
            <br></br>
            <TextField id="outlined-basic" label="Your Message" variant="outlined"  multiline rows={4} className={classes.textField}
            onInput={e => setMessage(e.target.value)}/>
            <br></br>
            <button type='submit'>Send Message</button>
          </form>


        </Grid>
  </Grid>

*/