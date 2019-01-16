import React, {Component} from 'react';
import './App.css';

import AdminCompetitions from '../competitions/admin-competitions/admin-competitions';
import AdminRunners from '../runners/admin-runners/admin-runners';
import Button from '@material-ui/core/Button';

export default class App extends Component {

  state = {
    showCompetitions: true
  };

  switchAdminPanels () {
    const showCompetitions = !this.state.showCompetitions;
      this.setState({
      showCompetitions: showCompetitions
    })
  }

  render() {
    return (
      <div className="Admin wrapper db-controls">
        { this.state.showCompetitions ? <AdminCompetitions/> : <AdminRunners/>}
        <Button className='change-panels-button'
                onClick={() => this.switchAdminPanels()}
                color="primary"
                variant="contained">
          Show admin {this.state.showCompetitions ? 'Runners' : 'Competitions'}
        </Button>
      </div>
    );
  }
}

