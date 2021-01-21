/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 267,
  },
  media: {
    height: 278,
  },
});

const ActivityListing = ({ activity }) => {
  const classes = useStyles();

  return (
    <div className="activityListing">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={activity.imageUrl}
            title={activity.name}
          />
          <CardContent>
            <Typography variant="body2" color="initial" component="p">
              {activity.reviews}
              {' '}
              reviews
            </Typography>
            <Typography variant="body2" color="initial" component="p">
              {activity.name}
            </Typography>
            <Typography variant="body2" color="initial" component="p">
              From $
              {activity.rate}
              {' '}
              / person
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ActivityListing;
