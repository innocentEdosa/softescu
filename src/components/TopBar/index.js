import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import EnglishFlag from 'components/commons/EnglishFlag';
import RomanianFlag from 'components/commons/RomanianFlag';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import ToggleComponent from 'HOC/ToggleComponent';
import Toolbar from '@material-ui/core/Toolbar';
import SimpleStateHandler from 'HOC/SimpleStateHandler';
import Typography from '@material-ui/core/Typography';
import routes from 'fixtures/routes';

import useStyles from './style';

const WhiteTextButton = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    // textTransform: 'capitalize',
    backgroundColor: 'transparent',
    '&:hover': {
      color: theme.palette.secondary.dark,
    },
  },
}))(Button);
const TopBar = () => (
  <SimpleStateHandler>
    {
        ({
          username, isStaff, isAuthenticated, changeLanguage, language, pathname, logOutUser,
        }) => {
          const { t } = useTranslation();
          const classes = useStyles();
          const [anchorEl, setAnchorEl] = React.useState(null);

          const isMenuOpen = Boolean(anchorEl);

          const handleProfileMenuOpen = (event) => {
            setAnchorEl(event.currentTarget);
          };

          const handleMenuClose = () => {
            setAnchorEl(null);
          };

          const handleLanguageChange = (selectedLang) => {
            handleMenuClose();
            changeLanguage(selectedLang);
          };

          const menuId = 'primary-desktop-menu';
          const renderMenu = (
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              id={menuId}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
              <MenuItem onClick={() => handleLanguageChange('ro')}>Romania</MenuItem>
            </Menu>
          );


          return (
            <div className={classes.grow}>
              <AppBar color="primary" position="fixed">
                <Toolbar>
                  <Typography className={classes.title} variant="h6" noWrap>
                    <span className="title-main">
                      <MenuBookIcon />
                      Active
                    </span>
                    {' '}
                    Learning
                  </Typography>
                  <div className={classes.grow} />
                  <div className={classes.navButtonRoot}>
                    <Link to={routes.home}>
                      <WhiteTextButton>{t('navigation.home')}</WhiteTextButton>
                    </Link>
                    <Link to={routes.store}>
                      <WhiteTextButton>{t('navigation.store')}</WhiteTextButton>
                    </Link>
                    <Link to={routes.about}>
                      <WhiteTextButton>{t('navigation.about')}</WhiteTextButton>

                    </Link>
                    <ToggleComponent
                      check={isAuthenticated && isStaff}
                      component={(
                        <Link to={routes.admin}>
                          <WhiteTextButton>
                            {t('navigation.admin')}
                          </WhiteTextButton>
                        </Link>
                  )}
                    />
                    <ToggleComponent
                      check={isAuthenticated}
                      component={(
                        <Link to={routes.account}>
                          <WhiteTextButton>{`${t('navigation.welcome')} ${username}`}</WhiteTextButton>
                        </Link>
                  )}
                    />
                    <ToggleComponent
                      check={!isAuthenticated && pathname !== routes.login}
                      component={(
                        <Link to={routes.login}>

                          <Button
                            size="small"
                            variant="contained"
                            color="secondary-light"
                          >
                            {t('navigation.login')}
                          </Button>
                        </Link>
                        )}
                    />
                    <ToggleComponent
                      check={!isAuthenticated && pathname === routes.login}
                      component={(
                        <Link to={routes.signup}>
                          <Button
                            size="small"
                            variant="contained"
                            color="secondary-light"
                          >
                            {t('navigation.signup')}
                          </Button>
                        </Link>
                        )}
                    />
                    <ToggleComponent
                      check={isAuthenticated}
                      component={(
                        <Button
                          onClick={logOutUser}
                          size="small"
                          variant="contained"
                          color="secondary-light"
                        >
                          {t('navigation.logout')}
                        </Button>
                        )}
                    />
                  </div>
                  <div>
                    <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <ToggleComponent
                        check={language === 'ro'}
                        component={(
                          <>
                            <span>ro</span>
                            <RomanianFlag />
                          </>
                          )}
                      />
                      <ToggleComponent
                        check={language === 'en'}
                        component={(
                          <>
                            <span>en</span>
                            <EnglishFlag />
                          </>
                          )}
                      />
                    </IconButton>
                  </div>
                </Toolbar>
              </AppBar>
              {renderMenu}
            </div>
          );
        }
    }
  </SimpleStateHandler>
);

export default TopBar;
