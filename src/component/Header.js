import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  appBar: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${theme.sidebarWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    }
  },
  menuButton: {
    marginLeft: 12,
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  title: {
    marginLeft: 36
  }
});

@withStyles(styles)
@withRouter
@translate()
@inject('store')
@observer
export default class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.appBar}>
        <Toolbar
          disableGutters={!this.props.store.isSidebarOpen}
          className={classes.toolbar}
        >
          <Hidden lgUp>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.props.store.toggle_sidebar}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
