import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import Alerts from 'components/Alerts';
import AlertEmitter from 'HOC/AlertEmitter';
import ToggleComponent from 'HOC/ToggleComponent';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import useStyles from './style';

const AddProduct = ({
  values: {
    title,
    author,
    isPremium,
    error: { title: titleError, author: authorError },
  },
  onChangePremium,
  imageUploadState: { img, loading },
  onBlur,
  uploadImage,
  addProduct,
  onChange,
  formatInputError,
  addingProducts,
  onCancel,
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.addProductWrapper}>
      <h5>{t('product.productInfo')}</h5>
      <div className={classes.alertWrapper}>
        <AlertEmitter emitterReference="addProductNotification">
          {({
            show, content, severity, onClose,
          }) => (
            <Alerts
              open={show}
              content={content}
              severity={severity}
              onClose={onClose}
            />
          )}
        </AlertEmitter>
      </div>
      <form className={classes.addProductForm}>
        <TextField
          error={titleError}
          size="medium"
          fullWidth
          id="title"
          label={t('inputs.title')}
          variant="outlined"
          name="title"
          value={title}
          onBlur={onBlur}
          onChange={onChange}
          disabled={addingProducts}
          helperText={formatInputError(titleError)}
        />
        <TextField
          error={authorError}
          size="medium"
          fullWidth
          id="author"
          label={t('inputs.author')}
          variant="outlined"
          name="author"
          value={author}
          onBlur={onBlur}
          onChange={onChange}
          disabled={addingProducts}
          helperText={formatInputError(authorError)}
        />
        <TextField
          type="file"
          fullWidth
          size="medium"
          id="imgUrl"
          label={t('inputs.productImg')}
          variant="outlined"
          name="imgUrl"
          disabled={addingProducts}
          onChange={uploadImage}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <ToggleComponent
          check={loading}
          component={(
            <CircularProgress
              style={{
                height: '20px',
                width: '20px',
                alignSelf: 'center',
              }}
              color="primary"
            />
          )}
        />
        <ToggleComponent
          check={img}
          component={(
            <div className={classes.addProductImgWrapper}>
              <img src={img} alt="product" />
            </div>
          )}
        />
        <div>
          <FormControlLabel
            className={classes.premiumTrack}
            control={(
              <Switch

                disabled={addingProducts}
                value={isPremium}
                onChange={onChangePremium}
                color="primary"
              />
            )}
            label={t('inputs.premium')}
            name="isPremium"
          />
        </div>
        <div className={classes.addProductButtonWrapper}>
          <Button
            size="medium"
            margin="normal"
            disabled={addingProducts}
            variant="contained"
            color="default"
            onClick={onCancel}
          >
            {t('buttons.cancel')}
          </Button>
          <Button
            onClick={addProduct}
            size="medium"
            margin="normal"
            disabled={addingProducts}
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

AddProduct.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    error: PropTypes.shape({
      title: PropTypes.array,
      author: PropTypes.array,

    }).isRequired,
  }).isRequired,
  onChangePremium: PropTypes.func.isRequired,
  imageUploadState: PropTypes.shape({
    img: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.bool,
  }).isRequired,
  onBlur: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  formatInputError: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  addingProducts: PropTypes.bool.isRequired,
};

// values: {
//   title,
//   author,
//   isPremium,
//   error: { title: titleError, author: authorError, imgUrl: imgUrlError },
// },
// onChangePremium,
// imageUploadState: { img, loading, error },
// onBlur,
// uploadImage,
// addProduct,
// onChange,
// formatInputError,
// addingProducts,
// onCancel,

export default AddProduct;
