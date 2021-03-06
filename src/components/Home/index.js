import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import ToggleComponent from 'HOC/ToggleComponent';
import { useTranslation } from 'react-i18next';

import useStyles from './style';

const Home = ({ products = [], fetchingProducts, openConfirmation }) => {
  const classes = useStyles();
  const premiumProducts = products.filter(({ isPremium }) => isPremium);
  const nonPremiumProducts = products.filter(({ isPremium }) => !isPremium);
  const { t } = useTranslation();

  const printProducts = (productsArray) => productsArray.map(
    ({
      isPurchased, author, title, publishedAt, imgUrl, isPremium,
    }, index) => (
      <Grid item xs={12} sm={!isPremium ? 4 : 12}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={title}
              height="140"
              image={imgUrl}
              title="Contemplative Reptile"
            />
            <CardContent className="bookDescription">
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
              >
                {title}
              </Typography>
              <p>
                {`${t('heading.author')}: ${author}`}
                {' '}
              </p>
              <p>
                {`${t('heading.datePublished')} ${new Date(
                  publishedAt,
                ).toDateString()}`}
                {' '}
              </p>
              <ToggleComponent
                check={isPremium}
                component={(
                  <Typography className="strike" variant="h6">
                    $10.99
                  </Typography>
            )}
              />
              <Typography variant="h6">{isPremium ? '$0.99' : '$10.99'}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ToggleComponent
              check={isPurchased}
              component={(
                <h5 className={classes.emp}>
                  {' '}
                  {t('prompt.purchased')}
                </h5>
              )}
            />
            <ToggleComponent
              check={!isPurchased}
              component={(
                <Button
                  onClick={() => openConfirmation(productsArray[index])}
                  className="buyNowBtn"
                  size="small"
                  color="primary"
                >
                  {t('buttons.buyNow')}
                </Button>
              )}
            />
          </CardActions>
        </Card>
      </Grid>
    ),
  );

  return (
    <div className={classes.root}>
      <div className={classes.showCase}>
        <div className="bookList">
          <Typography gutterBottom variant="h5" component="h2">
            {t('heading.recent')}
          </Typography>
          {' '}
          <ToggleComponent
            check={fetchingProducts}
            component={(
              <Grid container spacing={3}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                  <Grid item xs={12} sm={4}>
                    <Skeleton variant="rect" width={210} height={118} />
                    {' '}
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Grid>
                ))}
              </Grid>
            )}
          />
          <ToggleComponent
            check={!fetchingProducts && products.length}
            component={(
              <Grid container spacing={3}>
                {printProducts(nonPremiumProducts)}
              </Grid>
            )}
          />
        </div>
        <div className="premiumBooks">
          <Typography gutterBottom variant="h5" component="h2">
            {t('heading.special')}
            {' '}
          </Typography>
          <ToggleComponent
            check={fetchingProducts}
            component={(
              <Grid container spacing={3}>
                {[1, 2].map(() => (
                  <Grid item xs={12} sm={12}>
                    <Skeleton variant="rect" width={210} height={118} />
                    {' '}
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Grid>
                ))}
              </Grid>
            )}
          />
          <ToggleComponent
            check={!fetchingProducts && products.length}
            component={(
              <Grid container spacing={3}>
                {printProducts(premiumProducts)}
              </Grid>
            )}
          />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  products: PropTypes.shape([]).isRequired,
  fetchingProducts: PropTypes.bool.isRequired,
  openConfirmation: PropTypes.func.isRequired,
};

export default Home;
