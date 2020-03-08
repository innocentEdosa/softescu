import Backdrop from '@material-ui/core/Backdrop';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';
import ToggleComponent from 'HOC/ToggleComponent';
import useStyles from './style';

const DeleteModal = ({ onDelete }) => {
  const classes = useStyles();
  const { search, state: { type, name, identifier } = {} } = useLocation();
  const { goBack } = useHistory();
  const { mode } = qs.parse(search, { ignoreQueryPrefix: true });

  const [deleteInputState, setDeleteInputState] = useState('');

  useEffect(() => {
    setDeleteInputState('');
  }, [mode]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setDeleteInputState(value);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setDeleteInputState('');
    goBack();
  };

  const backdropClickHandler = (e) => {
    e.preventDefault();
    const { id } = e.target;
    if (id === 'backdrop') {
      closeModal(e);
    }
  };

  return (
    <Backdrop
      id="backdrop"
      className={classes.backdrop}
      open={mode === 'delete'}
      onClick={backdropClickHandler}
    >
      <Paper className={classes.showArea} elevation={3}>
        <Typography variant="h6" component="h4">
          {`Do you really want to delete this 
          ${type}
          ?`}
        </Typography>
        <Typography variant="h6" component="h4">
          Type
          <span className={classes.emp}>{` ${name} `}</span>
          to confirm
        </Typography>
        <TextField
          onChange={onChangeHandler}
          value={deleteInputState}
          margin="normal"
          size="small"
          fullWidth
          id="delete-modal-input"
          label="Product name"
          type="text"
          variant="outlined"
        />
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
            Cancel
          </Button>
          <ToggleComponent
            check={deleteInputState === name}
            component={(
              <Button
                onClick={() => onDelete(identifier)}
                size="medium"
                margin="normal"
                variant="contained"
                color="primary"
                fullWidth
              >
                Delete
              </Button>
        )}
          />
        </div>
      </Paper>
    </Backdrop>
  );
};

export default DeleteModal;
