import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '30px',
    width: '60vh'

  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
    textDecorationLine: 'underline',
    textDecorationColor: '#DE8336',
  },
  desc: {
    fontFamily: 'Quicksand',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#fff',
  },
  learnMoreButton: {
    color: '#DE8336'
  },
});




export default function ImageCard({ place, checked }){
  const classes = useStyles();

  

  return (
  <Collapse in={checked} { ... (checked ? { timeout: 1000 } : {})} >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Empty Pantry Background"
        />
        <CardContent>
          <Typography 
          gutterBottom variant="h5" 
          component="h2" 
          className={classes.title}>
            {place.title}
          </Typography>

          <Typography 
          variant="body2" 
          color="textSecondary" 
          component="p"
          className={classes.desc}>
            {place.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
        href="www.apple.com"
        target="_blank"
        size="small" 
        color="primary"
        className={classes.learnMoreButton}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  </Collapse>
  );
}
