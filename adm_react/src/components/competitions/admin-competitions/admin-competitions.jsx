import React, { Component } from 'react';

import EditCompetition from '../edit-competition/edit-competiton';
import TableCompetitions from '../table-competitions/table-competitions';
import NewCompetition from '../new-competition/new-competition';
import CompetitionDataUpdateControls from '../db-controlls/competition-data-update-controls';
import AdminService from '../../services/admin-service';
import './admin-competitions.css';
import * as Const from '../../constants/constants';


export default class AdminCompetitions extends Component {
  state = {
    competitions: [],
    currentCompetition: {
      id: '',
      name: '',
      date: '',
      runners: '',
      status: '',
      link: '',
    },
  };

  adminService = new AdminService();

  async componentDidMount() {
    this.getAllCompetitions('');
  }

  async getAllCompetitions(id) {
    const data = await this.adminService.getCompetitions();
    this.setState({ competitions: data });
    if (id) {
      this.radioButtonChange(id);
    }
  }

  radioButtonChange(id) {
    const { competitions } = this.state;
    const current = competitions.find(el => el.id === id);
    this.setState({ currentCompetition: current });
  }

  statusChange(id) {
    const { competitions } = this.state;
    const item = competitions.find(el => el.id === id);
    item.isAllowedUpdated = item.isAllowedUpdated === Const.NO ? Const.YES : Const.NO;
    this.setState({
      competitions: [...competitions],
    });
  }


  render() {
    const { competitions, currentCompetition } = this.state;
    return (
      <div className="admin-competitions">
        <div className="buttons-wrapper">
          <NewCompetition />
          <CompetitionDataUpdateControls competitions={competitions} />
        </div>
        <EditCompetition
          currCompetition={currentCompetition}
          getAllCompetitions={id => this.getAllCompetitions(id)}
          className="base-margin"
        />
        <TableCompetitions
          competitions={competitions}
          radioButtonChange={id => this.radioButtonChange(id)}
          statusChange={id => this.statusChange(id)}
          className="base-margin"
        />
      </div>
    );
  }
}
