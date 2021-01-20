/* eslint-disable react/prop-types */
import React from 'react';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 267,
  },
  media: {
    height: 278,
  },
});

const HomeListing = ({ home }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={home.imageUrl}
          title={home.name}
        />
        <CardContent>
          <Typography variant="body2" color="initial" component="p">
            {home.reviews}
            {' '}
            reviews
          </Typography>
          <Typography variant="body2" color="initial" component="p">
            {home.accommodationType}
            {' '}
            •
            {' '}
            {home.beds}
            {' '}
            beds
          </Typography>
          <Typography variant="body2" color="initial" component="p">
            {home.name}
          </Typography>
          <Typography variant="body2" color="initial" component="p">
            $
            {home.rate}
            {' '}
            / night
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HomeListing;
