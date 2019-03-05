import React, { Component } from 'react';
import './App.css';
import AdminCompetitions from '../competitions/admin-competitions/admin-competitions';
import AdminRunners from '../runners/admin-runners/admin-runners';
import * as Const from '../constants/constants';

export default class App extends Component {
  state = {
    showRunners: true,
  };

  componentDidMount() {
    window.addEventListener('message', this.getDataFromAngular);
    window.parent.postMessage({ componentDidMount: true }, '*');
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.getDataFromAngular);
  }

  getDataFromAngular = (e) => {
    if (e.data.path === Const.RUNNERS_PATH) {
      this.setState({
        showRunners: true,
      });
    }
    if (e.data.path === Const.COMPETITION_PATH) {
      this.setState({
        showRunners: false,
      });
    }
  };

  render() {
    const { showRunners } = this.state;
    return (
      <div className="wrapper db-controls">
        { showRunners ? <AdminRunners /> : <AdminCompetitions /> }
      </div>
    );
  }
}
