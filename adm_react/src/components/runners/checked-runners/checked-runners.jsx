import React, { Component } from 'react';

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
    currentRunner: {},
  };

  adminService = new AdminService();

  componentWillReceiveProps(props) {
    const { radioButtonState } = this.state;
    const isRunner = props.checkedRunners.find(runner => runner.id === +radioButtonState);
    if (!isRunner) {
      this.setState({
        currentRunner: {},
        radioButtonState: '',
      });
    }
  }

  radioButtonChange = (event) => {
    const { checkedRunners } = this.props;
    this.setState({ radioButtonState: event.target.value });
    const currentRunner = checkedRunners.find(runner => runner.id === +event.target.value);
    this.setState({
      currentRunner,
    });
  };

  updateSingleRunner = (currentRunner) => {
    this.adminService.updateSingleRunner(currentRunner);
  };

  render() {
    const { checkedRunners, addRunnerToMerge } = this.props;
    const { radioButtonState, currentRunner } = this.state;
    return (
      <div className="checked-runners">
        <Paper className="base-margin">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" align="center" />
                <TableCell align="left">Имя</TableCell>
                <TableCell align="left">Спортивное общество</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {checkedRunners.map(runner => (
                <TableRow key={runner.id}>
                  <TableCell padding="checkbox">
                    <RadioGroup
                      className="controls-padding"
                      aria-label="competitions"
                      value={radioButtonState}
                      onChange={e => this.radioButtonChange(e)}
                    >
                      <FormControlLabel value={runner.id.toString()} control={<Radio />} label="" />
                    </RadioGroup>
                  </TableCell>
                  <TableCell>{runner.name}</TableCell>
                  <TableCell>{runner.team}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        {radioButtonState ? (
          <AddMergedRunner
            currentRunner={currentRunner}
            checkedRunnersLength={checkedRunners.length}
            addRunnerToMerge={id => addRunnerToMerge(id)}
            updateSingleRunner={() => this.updateSingleRunner(currentRunner)}
          />
        ) : null}
      </div>
    );
  }
}
