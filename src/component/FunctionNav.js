import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter, Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import People from '@material-ui/icons/People';
import LocationCity from '@material-ui/icons/LocationCity';
import BarChart from '@material-ui/icons/BarChart';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Phone from '@material-ui/icons/Phone';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

@withStyles(styles)
@withRouter
@translate()
@inject('store')
@observer
export default class FunctionNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openArr: [false, false]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = key => {
    let temp = this.state.openArr;
    temp[key] = !temp[key];
    this.setState({ openArr: [...temp] });
  };

  render() {
    const { classes } = this.props;
    return (
      <List component="nav" className={classes.root}>
        <ListItem button onClick={() => this.handleClick(0)}>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText inset primary="玩家管理" />
          {this.state.openArr[0] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.openArr[0]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <Link to={`/playerlist`}>玩家列表</Link>
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => this.handleClick(1)}>
          <ListItemIcon>
            <LocationCity />
          </ListItemIcon>
          <ListItemText inset primary="代理管理" />
          {this.state.openArr[1] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.openArr[1]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <Link to={`/agentlist`}>代理列表</Link>
            </ListItem>
          </List>
        </Collapse>

        <ListItem button>
          <ListItemIcon>
            <BarChart />
          </ListItemIcon>
          <ListItemText inset primary="報表中心" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <Phone />
          </ListItemIcon>
          <ListItemText inset primary="客服中心" />
        </ListItem>
      </List>
    );
  }
}
