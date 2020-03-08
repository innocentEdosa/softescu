import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import sideNav from 'fixtures/sideNav';
import SimpleStateHandler from 'HOC/SimpleStateHandler';
import useStyles from './style';

const SideNav = () => (
  <SimpleStateHandler>
    {
      ({ pathname }) => {
        const classes = useStyles();
        const [open, setOpen] = React.useState(true);
        const { t } = useTranslation();

        const handleDrawerToggle = () => {
          setOpen((prevState) => !prevState);
        };

        return (
          <div className={classes.sideNavWrapper}>
            <Drawer
              variant="permanent"
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
              classes={{
                paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                }),
              }}
            >
              <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              </div>
              <Divider />
              <List>
                {sideNav.map(({ icon, title, activePath }) => (
                  <ListItem className={pathname === activePath ? 'activeList' : ''} button key={title}>
                    <ListItemIcon>
                      <span className={classes.listIconWrapper}>
                        <FontAwesomeIcon size="1x" icon={icon} />
                      </span>
                    </ListItemIcon>
                    <ListItemText className={classes.listText} primary={t(`sideNav.${title}`)} wrap />
                  </ListItem>
                ))}
              </List>
              <Divider />
              <div className={classes.grow} />
              <List>
                <ListItem>
                  <ListItemIcon>
                    <span className={classes.listIconWrapper}>
                      <FontAwesomeIcon size="1x" icon="copyright" />
                    </span>
                  </ListItemIcon>
                  <ListItemText className={classes.listText}>
                    ActiveLearning
                  </ListItemText>
                </ListItem>
              </List>
            </Drawer>
          </div>
        );
      }

    }
  </SimpleStateHandler>

);

export default SideNav;
