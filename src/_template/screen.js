import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  main: {
    display: 'block'
  },
  content: {
    background: '#ff0000'
  }
});
@withStyles(styles)
@withRouter
@translate()
@inject('store')
@observer
export default class ClassNamePlaceHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {
        key: {
          value: ''
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      form: {
        ...this.state.form,
        [name]: { value }
      }
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { store } = this.props;
    const payload = {
      arg: this.state.formdata.key.value
    };
    store.api(payload).then(resp => {
      //do someting
    });
  };

  render() {
    const { t, classes } = this.props;
    const content = (
      <div className={classes.main}>
        <div className={classes.content} />
      </div>
    );

    return (
      <DocumentTitle title={this.props.store.appName}>{content}</DocumentTitle>
    );
  }
}

ClassNamePlaceHolder.propTypes = {
  classes: PropTypes.object.isRequired
};
