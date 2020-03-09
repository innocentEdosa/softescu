import Button from '@material-ui/core/Button';
import React from 'react';
import SimpleStateHandler from 'HOC/SimpleStateHandler';
import ToggleComponent from 'HOC/ToggleComponent';
import Toolbar from '@material-ui/core/Toolbar';
import { useTranslation } from 'react-i18next';
import routes from 'fixtures/routes';
import { Link } from 'react-router-dom';
import qs from 'qs';
import useStyles from './style';

const TopMenu = () => (
  <SimpleStateHandler>


    { ({
      pathname, search, goBack,
    }) => {
      const { mode } = qs.parse(search, { ignoreQueryPrefix: true });
      const classes = useStyles();
      const { t } = useTranslation();
      return (
        <div className={classes.topMenu}>
          <Toolbar variant="dense">
            <div className={classes.grow} />

            <ToggleComponent
              check={pathname === '/admin/products' && mode !== 'addproduct'}
              component={(
                <Link to={routes.addProduct}>
                  <Button
                    color="secondary"
                    variant="contained"
                    edge="end"
                    className={classes.button}
                  >
                    {t('buttons.addNewBook')}
                  </Button>
                </Link>
)}
            />
            <ToggleComponent
              check={pathname === '/admin/products' && mode === 'addproduct'}
              component={(
                <Button
                  color="primary"
                  variant="contained"
                  edge="end"
                  className={classes.button}
                  onClick={goBack}
                >
                  {t('buttons.back')}
                </Button>
)}
            />
          </Toolbar>
        </div>
      );
    }}
  </SimpleStateHandler>
);

export default TopMenu;
