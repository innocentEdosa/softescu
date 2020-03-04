import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import useStyles from './style';

const AddProduct = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.addBookWrapper}>
      <h5>{t('product.bookInfo')}</h5>
      <form className={classes.addBookForm}>
        <TextField
          size="medium"
          fullWidth
          id="outlined-basic"
          label={t('inputs.title')}
          variant="outlined"
        />
        <TextField
          size="medium"
          fullWidth
          id="outlined-basic"
          label={t('inputs.author')}
          variant="outlined"
        />
        <TextField
          type="file"
          fullWidth
          size="medium"
          id="outlined-basic"
          label={t('inputs.bookImg')}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className={classes.addBookImgWrapper}>
          <img src="https://res.cloudinary.com/dqw7jnfgo/image/upload/v1558581693/l2udhwwyojirelzllx5q.jpg" alt="book" />
        </div>
        {/* <Card>
        <CardMedia
          className={classes.media}
          image="https://res.cloudinary.com/dqw7jnfgo/image/upload/v1558581693/l2udhwwyojirelzllx5q.jpg"
          title="Paella dish"
        />
      </Card> */}
        <div>
          <FormControlLabel
            className={classes.premiumTrack}
            control={(
              <Switch
          // value={fuelTrack}
                color="primary"
              />
)}
            label={t('inputs.premium')}
            name="premiumBook"
          />
        </div>
        <div className={classes.addBookButtonWrapper}>
          <Button
          // onClick={onRegisterUser}
            size="medium"
            margin="normal"
          // fullWidth
          // disabled={signUpLoading}
            variant="contained"
            color="default"
          >
            {t('buttons.cancel')}
          </Button>
          <Button
        // onClick={createTeams}
            size="medium"
            margin="normal"
          // fullWidth
          // disabled={signUpLoading}
            variant="contained"
            color="primary"
          >
            {t('buttons.addBook')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
