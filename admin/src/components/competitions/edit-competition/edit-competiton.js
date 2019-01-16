import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AdminService from '../../services/admin-service';
import Grid from '@material-ui/core/Grid';
import './edit-competition.css'

export default class EditCompetition extends Component {
  state = {
    competitionName: '',
    competitionId: '',
    disable: true
  };

  componentWillReceiveProps(props) {
    this.setState({
      competitionName: props.currentCompetition.name,
      competitionId: props.currentCompetition.id,
      disable: props.currentCompetition.name === ''
    });

  };


  onValueChange = (value) => {
    console.log(value);
    this.setState({
      competitionName: value
    })
  };

  onValueSave() {
    const competitions = new AdminService();
    competitions.saveCompetition({
        id: this.state.competitionId,
        title: this.state.competitionName
      }
    ).finally(() => this.props.getAllCompetitions(this.state.competitionId));
  };

  render() {
    return (
      <Card className='base-margin'>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4" className='margin-bottom'>
            {this.state.competitionName ? this.state.competitionName : 'Название соревнования'}
          </Typography>
          <Typography component="div">
            <Grid container spacing={24}>
              <Grid item xs={2}>
                <strong className='edit-text'>ID:</strong>
              </Grid>
              <Grid item xs={10}>
                <span className='edit-text'>{this.props.currentCompetition.id ? this.props.currentCompetition.id : '0000'}</span>
              </Grid>
            </Grid>
            <div className='input-wrapp'>
              <Grid container spacing={24}>
                <Grid item xs={2}>
                  <strong className='edit-text'>Название:</strong>
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    id="competition-name"
                    label="Название соревнования"
                    className='input input-name-width'
                    value={this.state.competitionName ? this.state.competitionName : 'Название соревнования'}
                    onChange={(event) => this.onValueChange(event.target.value)}
                  />
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={2}>
                  <strong className='edit-text'>Дата: </strong>
                </Grid>
                <Grid item xs={10}>
                  <span className='edit-text'>{this.props.currentCompetition.date ? this.props.currentCompetition.date : '00-00-000'}</span>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={2}>
                  <strong className='edit-text'>Статус: </strong>
                </Grid>
                <Grid item xs={10}>
                  <span className='edit-text'>{this.props.currentCompetition.status ? this.props.currentCompetition.status : 'STATUS'}</span>
                </Grid>
              </Grid>
            </div>
          </Typography>
        </CardContent>
        <CardActions className='db-controls'>
          <Button disabled={this.state.disable} variant="contained" color="primary" onClick={() => this.onValueSave()}>Save
            Competition</Button>
        </CardActions>
      </Card>
    );
  }
}
