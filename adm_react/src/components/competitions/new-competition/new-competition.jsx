import React, {Component} from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AdminService from '../../services/admin-service';
import './new-competition.css';

export default class NewCompetition extends Component {
  state = {
    competitionLink: '',
    urlRegExp: /http:\/\/(.+)\.(.+)\/(.+)\.(htm|html)/,
    urlError: '',
    disabled: true,
  };

  adminService = new AdminService();

  onChange = (e) => {
    const { urlRegExp } = this.state;
    this.setState({
      competitionLink: e.target.value,
    });

    const urlCheck = urlRegExp.test(e.target.value);
    if (urlCheck) {
      this.setState({
        urlError: '',
        disabled: false,
      });
    } else {
      this.setState({
        urlError: 'Invalid URL (Only MEOS, SFR and WinOrient pages)',
        disabled: true,
      });
    }
  };

  addNewCompetition(e) {
    const { competitionLink } = this.state;
    e.preventDefault();
    this.adminService.addCompetition(competitionLink);
  }

  render() {
    const { competitionLink, disabled, urlError } = this.state;
    return (
      <form onSubmit={e => this.addNewCompetition(e)}>
        <div className="input-wrapp form-width">
          <TextField
            id="competition-name"
            label="New competition"
            value={competitionLink}
            onChange={e => this.onChange(e)}
            className="input link-input"
          />
          <Button
            variant="contained"
            type="submit"
            disabled={disabled}
            className="add-link"
          >
            Добавить
          </Button>
        </div>
        <div className="error red">{urlError}</div>
      </form>

    );
  }
}
