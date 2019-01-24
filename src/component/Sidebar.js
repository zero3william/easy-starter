import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';

import Brand from '../component/Brand';
import FunctionNav from '../component/FunctionNav';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100vh',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    width: theme.sidebarWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  brand: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '64px'
  }
});

@withStyles(styles)
@withRouter
@translate()
@inject('store')
@observer
export default class Sidebar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Hidden mdDown>
          <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
            <div className={classes.brand}>
              <Brand />
            </div>
            <Divider />
            <FunctionNav />
          </Drawer>
        </Hidden>
        <Hidden lgUp>
          <Drawer
            variant="temporary"
            classes={{
              paper: classNames(
                this.props.store.isSidebarOpen && classes.drawerPaper
              )
            }}
            open={this.props.store.isSidebarOpen}
            onClose={this.props.store.toggle_sidebar}
          >
            <div className={classes.brand}>
              <Brand />
            </div>
            <Divider />
            <FunctionNav />
          </Drawer>
        </Hidden>
      </div>
    );
  }
}
