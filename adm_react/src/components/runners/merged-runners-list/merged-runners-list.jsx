import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './merged-runners-list.css';

export default class MergedRunnersList extends Component {
  state = {};

  render() {
    const {
      mergedRunners, deleteMergedRunner, saveMergedRunners, cancelMergedRunners,
    } = this.props;
    return (
      <Card className="base-margin sticky-top merged-runners-list">
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4" className="margin-bottom">
            Спортсмены для обработки:
          </Typography>
          <Typography component="div" variant="h6">
            {mergedRunners.map((runner, key) => (
              <div key={runner.main.id} className="runners-list">
                <strong>{`${key + 1}. `}</strong>
                <span>{runner.main.name}</span>
                <button type="submit" className="trash-button" onClick={() => deleteMergedRunner(runner.main.id)}><Icon className="red">close</Icon></button>
                {runner.duplicates.map(runners => (
                  <div key={runners.id} className="duplicates-runners">{runners.name}</div>
                ))}
              </div>
            ))}
          </Typography>
        </CardContent>
        <CardActions className="db-controls">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => saveMergedRunners()}
            className="red save"
          >
              Сохранить
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => cancelMergedRunners()}
            className="red cancel"
          >
              Отменить
          </Button>
        </CardActions>
      </Card>
    );
  }
}
