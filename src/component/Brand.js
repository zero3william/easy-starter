import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  brand: {
    width: '180px',
    height: '64px',
    backgroundRepeat: 'no-repeat',
    backgroundImage:
      'url(https://cdn-images-1.medium.com/max/2000/1*fVyLVvnbisXOgh1v3EhTrg.png)',
    backgroundSize: '180px 64px'
  }
});
@withStyles(styles)
@withRouter
@translate()
@inject('store')
@observer
export default class Brand extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.brand} />;
  }
}
