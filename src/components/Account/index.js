import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import React from 'react';
import useStyles from './style';

const Account = ({
  user: {
    firstName, lastName, email, phoneNumber,
  },
}) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.accountWrapper}>
        <Avatar className={classes.avatar}>NO</Avatar>
        <div className={classes.details}>
          <h5 className={classes.label}>Name</h5>
          <h5>{`${firstName} ${lastName}`}</h5>
        </div>
        <div className={classes.details}>
          <h5 className={classes.label}>Telephone number</h5>
          <h5>{phoneNumber}</h5>
        </div>
        <div className={classes.details}>
          <h5 className={classes.label}>Email</h5>
          <h4>{email}</h4>
        </div>
      </div>
    </div>
  );
};

Account.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }).isRequired,
};

export default Account;
