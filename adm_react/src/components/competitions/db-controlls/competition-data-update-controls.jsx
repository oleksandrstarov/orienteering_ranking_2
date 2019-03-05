import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import AdminService from '../../services/admin-service';
import './competition-data-update-controls.css';

export default class CompetitionDataUpdateControls extends Component {
  adminService = new AdminService();

  onRecalculate() {
    const { competitions } = this.props;
    const updatedCompetitions = competitions
      .filter(el => el.isAllowed !== el.isAllowedUpdated)
      .map(el => ({
        ID: el.id,
        IS_ALLOWED: el.isAllowed,
        IS_ALLOWED_UPDATED: el.isAllowedUpdated,
      }));
    this.adminService.recalculateCompetitions(updatedCompetitions);
  }

  static onTotalDrop() {
    this.adminService.totalDropCompetitions();
  }

  render() {
    return (
      <div className="db-controls">
        <Button variant="contained" color="primary" onClick={() => this.onRecalculate()}>
          Сохранить и пересчитать
        </Button>
        <Button variant="contained" color="secondary" onClick={() => this.onTotalDrop()}>
          Пересчитать полность
        </Button>
      </div>
    );
  }
}
