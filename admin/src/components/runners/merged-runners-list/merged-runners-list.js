import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export default class MergedRunnersList extends Component {
  state = {};


  render() {
    return (
      <Card className='base-margin sticky-top'>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h4" className='margin-bottom'>
            Спортсмены для обработки:
          </Typography>
          <Typography component="div" variant="h6">
            {this.props.mergedRunners.map(runner => {
              return (
                <div key={runner.main.id}>{runner.main.name}</div>
              );
            })}
          </Typography>
        </CardContent>
        <CardActions className='db-controls'>
            <Button variant="contained"
                    color="secondary"
                    onClick={() => this.props.saveMergedRunners()}>
              Save
            </Button>
            <Button variant="contained"
                    color="secondary"
                    onClick={() => this.props.cancelMergedRunners()}>
              Cancel
            </Button>
        </CardActions>
      </Card>
    );
  }
}
