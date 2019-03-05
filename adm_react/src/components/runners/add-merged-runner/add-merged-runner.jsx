import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import * as Const from '../../constants/constants';
import './add-merged-runner.css';

export default class AddMergedRunner extends Component {
  state = {
    sex: '',
    team: '',
  };

  componentDidMount() {
    const { checkedRunnersLength, currentRunner } = this.props;
    if (checkedRunnersLength === 1) {
      this.setState({
        sex: currentRunner.sex,
        team: currentRunner.team,
      });
    }
  }

  componentWillReceiveProps() {
    const { checkedRunnersLength, currentRunner } = this.props;
    if (checkedRunnersLength === 1) {
      this.setState({
        sex: currentRunner.sex,
        team: currentRunner.team,
      });
    }
  }

  onTeamChange(text) {
    this.setState({
      team: text,
    });
  }

  cardActionsButton = (checkedRunnersLength, addRunnerToMerge, currentRunner) => {
    if (checkedRunnersLength > 1) {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() => addRunnerToMerge(currentRunner.id)}
        >
          Обьединить
        </Button>
      );
    }

    if (checkedRunnersLength === 1) {
      return (
        <Button
          variant="contained"
          color="secondary"
          onClick={() => this.updateSingleRunner(currentRunner)}
        >
          Обновить
        </Button>
      );
    }
    return null;
  };

  updateSingleRunner(currentRunner) {
    const { sex, team } = this.state;
    const { updateSingleRunner } = this.props;
    const currRunner = currentRunner;
    currRunner.sex = sex;
    currRunner.team = team;
    updateSingleRunner(currentRunner);
  }

  sexChange() {
    const { sex } = this.state;
    const currentSex = sex === Const.MEN ? Const.WOMEN : Const.MEN;
    this.setState({
      sex: currentSex,
    });
  }

  render() {
    const { team, sex } = this.state;
    const { currentRunner, checkedRunnersLength, addRunnerToMerge } = this.props;
    return (
      <Card className="base-margin add-merged-runners">
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4" className="margin-bottom">
            {currentRunner.name}
          </Typography>
          <Typography component="div" variant="h6">
            <Grid container spacing={24}>
              <Grid item xs={2}>
                <strong>ID: </strong>
              </Grid>
              <Grid item xs={10}>
                <span>{currentRunner.id}</span>
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={2}>
                <strong>Клуб: </strong>
              </Grid>
              <Grid item xs={10}>
                <span>
                  {checkedRunnersLength > 1
                    ? currentRunner.team
                    : (
                      <TextField
                        id="runner-club"
                        label="Название соревнования"
                        className="input input-name-width"
                        value={team}
                        onChange={event => this.onTeamChange(event.target.value)}
                      />
                    )
                }
                </span>
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={2}>
                <strong>Пол: </strong>
              </Grid>
              <Grid item xs={10}>
                <span>
                  {checkedRunnersLength > 1
                    ? currentRunner.sex
                    : (
                      <NativeSelect
                        value={sex}
                        name="sex"
                        onChange={() => this.sexChange()}
                        className="select-gender"
                      >
                        <option value={Const.MEN}>Мужской</option>
                        <option value={Const.WOMEN}>Женский</option>
                      </NativeSelect>
                    )}
                </span>
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
        <CardActions className="db-controls">
          {this.cardActionsButton(checkedRunnersLength, addRunnerToMerge, currentRunner)}
        </CardActions>
      </Card>
    );
  }
}
