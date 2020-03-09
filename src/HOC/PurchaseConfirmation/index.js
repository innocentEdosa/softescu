import { connect } from 'react-redux';
import { purchaseProduct } from 'store/actions/productActions';
import AlertEmitter from 'HOC/AlertEmitter';
import Alerts from 'components/Alerts';
import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import useStyles from './style';

const PurchaseConfirmation = ({ render, purchaseOneProduct }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [purchaseState, setPurchaseState] = useState({
    isModalOpen: false,
    product: {},
  });

  const openPurchaseConfirmation = (product) => setPurchaseState({
    isModalOpen: true,
    product,
  });

  const closePurchaseConfirmation = () => setPurchaseState({
    isModalOpen: false,
    product: {},
  });


  const closeModal = (e) => {
    e.preventDefault();
    closePurchaseConfirmation();
  };

  const backdropClickHandler = (e) => {
    e.preventDefault();
    const { id } = e.target;
    if (id === 'backdrop') {
      closeModal(e);
    }
  };

  const purchaseProductHandler = (e, id) => {
    e.preventDefault();
    purchaseOneProduct(id);
    return setTimeout(() => closeModal(e), 3000);
  };

  const { isModalOpen, product: { title, isPremium, id } } = purchaseState;
  return (
    <>
      {render({ openPurchaseConfirmation })}
      <Backdrop
        id="backdrop"
        className={classes.backdrop}
        open={isModalOpen}
        onClick={backdropClickHandler}
      >
        <Box my={3}>
          <AlertEmitter emitterReference="purchaseNotification">
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
        </Box>
        <Paper className={classes.showArea} elevation={3}>
          <Typography variant="h6" component="h4">
            {`You are about to buy ${title} for ${isPremium ? '$0.99' : '$10.99'}`}
          </Typography>

          <div className={classes.deleteProductButtonWrapper}>
            <Button
              className="firstButton"
              size="medium"
              margin="normal"
              variant="contained"
              fullWidth
              color="default"
              onClick={closeModal}
            >
              {t('buttons.cancel')}
            </Button>
            <Button
              onClick={(e) => purchaseProductHandler(e, id)}
              size="medium"
              margin="normal"
              variant="contained"
              color="primary"
              fullWidth
            >
              {t('buttons.pay')}
            </Button>
          </div>
        </Paper>
      </Backdrop>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  purchaseOneProduct: (productId) => dispatch(purchaseProduct(productId)),
});

PurchaseConfirmation.propTypes = {
  render: PropTypes.func.isRequired,
  purchaseOneProduct: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PurchaseConfirmation);
