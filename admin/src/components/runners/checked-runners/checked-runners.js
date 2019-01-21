import React, {Component} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddMergedRunner from '../add-merged-runner/add-merged-runner';
import AdminService from '../../services/admin-service';

export default class CheckedRunners extends Component {
  state = {
    radioButtonState: '',
    currentRunner: {}
  };

  componentWillReceiveProps(props) {
    const isRunner = props.checkedRunners.find((runner) => runner.id === +this.state.radioButtonState);
    if (!isRunner) {
      this.setState({
        currentRunner: {},
        radioButtonState: ''
      });
    }
  };

  radioButtonChange = event => {
    this.setState({radioButtonState: event.target.value});
    const currentRunner = this.props.checkedRunners.find(runner => runner.id === +event.target.value);
    this.setState({
      currentRunner: currentRunner
    });
  };

  updateSingleRunner(currentRunner) {
    const adminService = new AdminService();
    adminService.updateSingleRunner(currentRunner);
  }


  render() {
    return (
      <div>
        <Paper className='base-margin'>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" align="center"></TableCell>
                <TableCell align="left">Имя</TableCell>
                <TableCell align="left">Спортивное общество</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.checkedRunners.map(runner => {
                return (
                  <TableRow key={runner.id}>
                    <TableCell padding="checkbox">
                      <RadioGroup
                        className='controls-padding'
                        aria-label="competitions"
                        value={this.state.radioButtonState}
                        onChange={(e) => this.radioButtonChange(e)}
                      >
                        <FormControlLabel value={runner.id.toString()} control={<Radio/>} label=""/>
                      </RadioGroup>
                    </TableCell>
                    <TableCell>{runner.name}</TableCell>
                    <TableCell>{runner.team}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        {this.state.radioButtonState ? <AddMergedRunner
          currentRunner={this.state.currentRunner}
          checkedRunnersLength={this.props.checkedRunners.length}
          addRunnerToMerge={(id) => this.props.addRunnerToMerge(id)}
          updateSingleRunner={(currentRunner) => this.updateSingleRunner(currentRunner)}
        /> : null}
      </div>
    );
  }
}
