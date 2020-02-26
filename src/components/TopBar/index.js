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
    backgroundColor: 'transparent',
    // '&:hover': {
    //   backgroundColor: purple[700],
    // },
  },
}))(Button);
const TopBar = () => (
  <SimpleStateHandler>
    {
        ({ changeLanguage, language, pathname }) => {
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
              <AppBar color="primary" position="static">
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
                    <WhiteTextButton>{t('navigation.home')}</WhiteTextButton>
                    <WhiteTextButton>{t('navigation.store')}</WhiteTextButton>
                    <WhiteTextButton>{t('navigation.about')}</WhiteTextButton>
                    <ToggleComponent
                      check={pathname !== routes.login}
                      component={(
                        <Link to={routes.login}>

                          <Button
                            size="small"
                            variant="contained"
                            color="secondary"
                          >
                            {t('navigation.login')}
                          </Button>
                        </Link>
                        )}
                    />
                    <ToggleComponent
                      check={pathname === routes.login}
                      component={(
                        <Link to="/signup">
                          <Button
                            size="small"
                            variant="contained"
                            color="secondary"
                          >
                            {t('navigation.signup')}
                          </Button>
                        </Link>
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
