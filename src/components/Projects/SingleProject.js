import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia} from '@material-ui/core';

const useStyles = makeStyles(()=>({
  borderOverlay: {
    border: '4px solid white'
  },
  centerText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(255,255,255,0.6)'
  }
}));

const SingleProject = (props) => {
  const classes = useStyles();



  return (
    <Grid container spacing={1}>
      <Card>
        <CardActionArea>
          <CardMedia
            component='img'
            image={props.picture}
            height='200'
            className={classes.borderOverlay}

          />
          <CardContent>
            <Typography
              className={classes.centerText}
              variant='body1'
              >
              {props.categoryName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default SingleProject;