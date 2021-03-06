import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  main: {
    width: '80px',
    height: '40px'
  }
});
@withStyles(styles)
@withRouter
@translate()
@inject('store')
@observer
export default class Example extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.main} />;
  }
}
