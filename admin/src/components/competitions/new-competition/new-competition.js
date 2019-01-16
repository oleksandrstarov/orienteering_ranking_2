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
    disabled: true

  };

  addNewCompetition(e) {
    e.preventDefault();
    const addCompetition = new AdminService();

    addCompetition.addCompetition(this.state.competitionLink);
  };

  onChange = (e) => {
    this.setState({
      competitionLink: e.target.value
    });

    const urlCheck = this.state.urlRegExp.test(e.target.value);
    if (urlCheck) {
      this.setState({
        urlError: '',
        disabled: false
      });
    } else {
      this.setState({
        urlError: 'Invalid URL (Only MEOS, SFR and WinOrient pages)',
        disabled: true
      })
    }
  };

  render() {
    return (
      <form onSubmit={e => this.addNewCompetition(e)}>
          <div className='input-wrapp form-width'>
          <TextField
            id='competition-name'
            label='New competition'
            value={this.state.competitionLink}
            onChange={e => this.onChange(e)}
            className='input link-input'
          />
          <Button variant='contained'
                  type='submit'
                  disabled={this.state.disabled}
                  className='add-link'>
            Add
          </Button>
        </div>
        <div className='error red'>{this.state.urlError}</div>
      </form>

    );
  }
}
