import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 267,
  },
  media: {
    height: 178,
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
          <Typography gutterBotton variant="h5" component="h2">
            {home.name}
          </Typography>
          <Typography variant="body2" color="initial" component="p">
            {home.rate}
            {' '}
            / night
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// const HomeListing = ({ home }) => {
//   const List = styled.li`
//   list-style: none;
// `;

// const Image = styled.div`
//   border-radius: 8px;
//   border: 1px solid red;
// `;

//   return (
//     <List>
//     <div className="home">
//       <Image>
//         <img src={home.imageUrl} alt="home" />
//       </Image>
//       <div className="homeReviews">
//         {home.reviews}
//         {' '}
//         reviews
//       </div>
//       <div className="accommodationType">
//         {home.accommodationType}
//         {' '}
//         *
//         {home.beds}
//         {' '}
//         beds
//       </div>
//       <div className="homeName">
//         {home.name}
//       </div>
//       <div className="homeRate">
//         {home.rate}
//         {' '}
//         / night
//       </div>
//     </div>
//   </List>
//   );
// };

export default HomeListing;
