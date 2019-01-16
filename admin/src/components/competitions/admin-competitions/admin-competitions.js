import React, {Component} from 'react';

import EditCompetition from '../edit-competition/edit-competiton';
import TableCompetitions from '../table-competitions/table-competitions';
import NewCompetition from '../new-competition/new-competition';
import DbControlls from '../db-controlls/db-controlls';
import AdminService from '../../services/admin-service';
import './admin-competitions.css'

export default class AdminCompetitions extends Component {

  state = {
    competitions: [],
    currentCompetition: {
      id: '',
      name: '',
      date: '',
      runners: '',
      status: '',
      link: ''
    }
  };

  async componentDidMount() {
    this.getAllCompetitions('');
  }

  async getAllCompetitions(id) {
    const competitions = new AdminService();
    const data = await competitions.getCompetitions();
    this.setState({competitions: data});
    if (id) {
      this.radioButtonChange(id);
    }
  }

  radioButtonChange(id) {
    const current = this.state.competitions.find(el => el.id === id);
    this.setState({currentCompetition: current});
  };

  statusChange(id) {
    let item = this.state.competitions.find(el => el.id === id);
    item.isAllowedUpdated = item.isAllowedUpdated === 'N' ? 'Y' : 'N';
    this.setState({
      competitions: [...this.state.competitions]
    });
  };

  render() {
    return (
      <div className="admin-competitions">
        <h1><strong>Competitions</strong></h1>
        <div className='buttons-wrapper'>
          <NewCompetition/>
          <DbControlls competitions={this.state.competitions}/>
        </div>
        <EditCompetition currentCompetition={this.state.currentCompetition}
                         getAllCompetitions={(id) => this.getAllCompetitions(id)}
                         className='base-margin'/>
        <TableCompetitions competitions={this.state.competitions}
                           radioButtonChange={(id) => this.radioButtonChange(id)}
                           statusChange={(id) => this.statusChange(id)}
                           className='base-margin'/>
      </div>
    );
  }
}
