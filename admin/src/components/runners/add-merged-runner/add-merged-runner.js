import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';

export default class AddMergedRunner extends Component {
  state = {
    sex: '',
    team: ''
  };

  componentDidMount() {
    if (this.props.checkedRunnersLength === 1) {
      this.setState({
        sex: this.props.currentRunner.sex,
        team: this.props.currentRunner.team
      })
    }
  }

  componentWillReceiveProps(props) {
    if (this.props.checkedRunnersLength === 1) {
      this.setState({
        sex: this.props.currentRunner.sex,
        team: this.props.currentRunner.team
      })
    }
  };

  sexChange() {
    const currentSex = this.state.sex === 'M' ? 'W' : 'M';
    this.setState({
      sex: currentSex
    })
  }

  onTeamChange(text) {
    this.setState({
      team: text
    });
  }

  updateSingleRunner(currentRunner) {
    currentRunner.sex = this.state.sex;
    currentRunner.team = this.state.team;
    this.props.updateSingleRunner(currentRunner);
  }

  render() {
    return (
      <Card className='base-margin'>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4" className='margin-bottom'>
            {this.props.currentRunner.name}
          </Typography>
          <Typography component="div" variant="h6">
            <Grid container spacing={24}>
              <Grid item xs={2}>
                <strong>ID: </strong>
              </Grid>
              <Grid item xs={10}>
                <span>{this.props.currentRunner.id}</span>
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={2}>
                <strong>Клуб: </strong>
              </Grid>
              <Grid item xs={10}>
                <span>{this.props.checkedRunnersLength > 1 ?
                  this.props.currentRunner.team :
                  <TextField
                    id="runner-club"
                    label="Название соревнования"
                    className='input input-name-width'
                    value={this.state.team}
                    onChange={(event) => this.onTeamChange(event.target.value)}
                  />
                }</span>
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={2}>
                <strong>Пол: </strong>
              </Grid>
              <Grid item xs={10}>
                <span>{this.props.checkedRunnersLength > 1 ?
                  this.props.currentRunner.sex :
                  <NativeSelect
                    value={this.state.sex}
                    name="sex"
                    onChange={() => this.sexChange()}
                  >
                    <option value={'M'}>Men</option>
                    <option value={'W'}>Woman</option>
                  </NativeSelect>}</span>
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
        <CardActions className='db-controls'>
          {this.props.checkedRunnersLength > 1 ?
            <Button variant="contained"
                    color="secondary"
                    onClick={() => this.props.addRunnerToMerge(this.props.currentRunner.id)}>
              Merge
            </Button> :
            <Button variant="contained"
                    color="secondary"
                    onClick={() => this.updateSingleRunner(this.props.currentRunner)}>
              Update
            </Button>}
        </CardActions>
      </Card>
    );
  }
}
