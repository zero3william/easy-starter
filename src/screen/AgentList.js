import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';

import DocumentTitle from 'react-document-title';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  main: {
    padding: 20
  }
});

@withStyles(styles)
@withRouter
@translate()
@inject('store')
@observer
export default class AgentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        acc: {
          value: 'ownerjjj',
          placeholder: 'account'
        },
        pwd: {
          value: '00000000',
          placeholder: 'password'
        },
        type: {
          value: 'SS'
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
  };

  render() {
    const { t, classes } = this.props;
    const content = (
      <div>
        <main className={classes.main}>I am agentList</main>
      </div>
    );

    return (
      <DocumentTitle title={this.props.store.appName}>{content}</DocumentTitle>
    );
  }
}
