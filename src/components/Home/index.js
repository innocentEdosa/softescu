import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useStyles from './style';

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Paper className={classes.showCase} variant="outlined">
        <div className={classes.showCaseImg}>
          <img src="https://res.cloudinary.com/dqw7jnfgo/image/upload/v1558581693/l2udhwwyojirelzllx5q.jpg" alt="book img" />
        </div>
        <div className={classes.bookDetails}>
          <h4>The avalanche of books</h4>
        </div>
      </Paper> */}
      <div className={classes.showCase}>
        <div className="bookList">
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 8, 9, 9, 8, 9, 9].map(() => (
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image="https://res.cloudinary.com/dqw7jnfgo/image/upload/v1558581693/l2udhwwyojirelzllx5q.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent className="bookDescription">
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <p>Date added: </p>
                      <Typography variant="h6">$10.99</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button className="addToCartBtn">
                      <FontAwesomeIcon icon="cart-plus" />
                    </Button>
                    <Button className="buyNowBtn" size="small" color="primary">
                      Buy now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          {' '}
        </div>
        <div className="premiumBooks">
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 9, 9].map(() => (
              <Grid item xs={12} sm={12}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image="https://res.cloudinary.com/dqw7jnfgo/image/upload/v1558581693/l2udhwwyojirelzllx5q.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent className="bookDescription">
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <p>Date added: </p>
                      <Typography variant="h6">$10.99</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button className="addToCartBtn">
                      <FontAwesomeIcon icon="cart-plus" />
                    </Button>
                    <Button className="buyNowBtn" size="small" color="primary">
                      Buy now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
