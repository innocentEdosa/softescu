import React from 'react';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './style';

const Alerts = ({
  open,
  content,
  severity,
  onClose,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          severity={severity}
          action={(
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                onClose();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          )}
        >
          {
content
}
        </Alert>
      </Collapse>
    </div>
  );
};

Alerts.propTypes = {
  open: PropTypes.bool.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  severity: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alerts;
