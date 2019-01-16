import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import AdminService from "../../services/admin-service";
import './db-controlls.css'

export default class DbControlls extends Component {

  onRecalculate() {
    const competitions = new AdminService();
    const updatedCompetitions = this.props.competitions
      .filter(el => el.isAllowed !== el.isAllowedUpdated)
      .map(el => {
        return {
          ID: el.id,
          IS_ALLOWED: el.isAllowed,
          IS_ALLOWED_UPDATED: el.isAllowedUpdated
        }
      });
    competitions.recalculateCompetitions(updatedCompetitions);
  };

  onTotalDrop() {
    const totalDrop = new AdminService();
    totalDrop.totalDropCompetitions();
  }

  render() {
    return (
      <div className='db-controls'>
        <Button variant="contained" color="primary" onClick={() => this.onRecalculate()}>
          Recalculate
        </Button>
        <Button variant="contained" color="secondary" onClick={() => this.onTotalDrop()}>
          Total drop
        </Button>
      </div>
    );
  }
}
