import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AdminService from '../../services/admin-service';
import './edit-competition.css';

export default class EditCompetition extends Component {
  state = {
    competitionName: '',
    competitionId: '',
    disable: false,
  };

  adminService = new AdminService();

  componentWillReceiveProps(props) {
    this.setState({
      competitionName: props.currCompetition.name,
      competitionId: props.currCompetition.id,
      disable: props.currCompetition.name === '',
    });
  }

  onValueChange = (value) => {
    this.setState({
      competitionName: value,
    });
  };

  onValueSave() {
    const { competitionId, competitionName, getAllCompetitions } = this.state;
    this.adminService.saveCompetition({
      id: competitionId,
      title: competitionName,
    })
      .finally(() => getAllCompetitions(competitionId));
  }

  render() {
    const { competitionName, disable } = this.state;
    const { currCompetition } = this.props;
    return (
      <Card className="base-margin">
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4" className="margin-bottom">
            {!competitionName ? 'Название соревнования' : competitionName}
          </Typography>
          <Typography component="div">
            <Grid container spacing={24}>
              <Grid item xs={2}>
                <strong className="edit-text">ID:</strong>
              </Grid>
              <Grid item xs={10}>
                <span className="edit-text">{currCompetition.id ? currCompetition.id : '0000'}</span>
              </Grid>
            </Grid>
            <div className="input-wrapp">
              <Grid container spacing={24}>
                <Grid item xs={2}>
                  <strong className="edit-text">Название:</strong>
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    id="competition-name"
                    label="Название соревнования"
                    className="input input-name-width"
                    value={!competitionName ? 'Название соревнования' : competitionName}
                    onChange={event => this.onValueChange(event.target.value)}
                  />
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={2}>
                  <strong className="edit-text">Дата: </strong>
                </Grid>
                <Grid item xs={10}>
                  <span className="edit-text">{currCompetition.date ? currCompetition.date : '00-00-000'}</span>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={2}>
                  <strong className="edit-text">Статус: </strong>
                </Grid>
                <Grid item xs={10}>
                  <span className="edit-text">{currCompetition.status ? currCompetition.status : 'STATUS'}</span>
                </Grid>
              </Grid>
            </div>
          </Typography>
        </CardContent>
        <CardActions className="db-controls">
          <Button
            disabled={disable}
            variant="contained"
            color="primary"
            onClick={() => this.onValueSave()}
          >
            Сохранить
          </Button>
        </CardActions>
      </Card>
    );
  }
}
