import Button from '@material-ui/core/Button';
import React from 'react';
import SimpleStateHandler from 'HOC/SimpleStateHandler';
import ToggleComponent from 'HOC/ToggleComponent';
import Toolbar from '@material-ui/core/Toolbar';
import { useTranslation } from 'react-i18next';
import useStyles from './style';

const TopMenu = () => (
  <SimpleStateHandler>


    { ({
      pathname,
    }) => {
      const classes = useStyles();
      const { t } = useTranslation()
      return (
        <div className={classes.topMenu}>
          <Toolbar variant="dense">
            <div className={classes.grow} />
            <Button
              color="secondary"
              variant="contained"
              edge="end"
              className={classes.button}
            >
              {t('buttons.addNewBook')}
            </Button>
          </Toolbar>
        </div>
      );
    }}
  </SimpleStateHandler>
);

export default TopMenu;
