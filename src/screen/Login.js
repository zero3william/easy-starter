import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';

import LangLink from '../component/LangLink';

import DocumentTitle from 'react-document-title';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  main: {
    width: '600px',
    margin: '30px auto',
    display: 'block' // Fix IE 11 issue.
  },
  lang: {
    margin: '30px 0'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px'
  },
  form: {
    width: '100%' // Fix IE 11 issue.
  },
  btn: {
    marginTop: '30px'
  }
});
@withStyles(styles)
@withRouter
@translate()
@inject('store')
@observer
export default class Login extends Component {
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

    const { store } = this.props;
    const payload = {
      username: this.state.form.acc.value,
      password: this.state.form.pwd.value,
      type: this.state.form.type.value
    };
    store
      .login(payload)
      .then(resp => {
        console.log('loginResp', resp);
        this.props.history.push('/playerlist');
      })
      .catch(err => {
        console.log('loginErr', err);
      });
  };

  render() {
    const { t, classes } = this.props;
    const content = (
      <main className={classes.main}>
        <div className={classes.lang}>
          <LangLink />
        </div>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="acc">Account</InputLabel>
              <Input
                id="acc"
                name="acc"
                autoFocus
                value={this.state.form.acc.value}
                placeholder={this.state.form.acc.placeholder}
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="pwd">Password</InputLabel>
              <Input
                name="pwd"
                type="password"
                id="pwd"
                value={this.state.form.pwd.value}
                placeholder={this.state.form.pwd.placeholder}
                onChange={this.handleChange}
              />
            </FormControl>
            <Button
              className={classes.btn}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              {t('SignIn')}
            </Button>
          </form>
        </Paper>
      </main>
    );

    return (
      <DocumentTitle title={this.props.store.appName}>{content}</DocumentTitle>
    );
  }
}
