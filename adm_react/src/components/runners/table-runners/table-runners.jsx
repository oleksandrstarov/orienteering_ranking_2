import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import './table-runners.css';

export default class TableRunners extends Component {
  state = {
  };

  render() {
    const { allRunners, statusChange } = this.props;
    return (
      <Paper className="base-margin table-runners">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" align="center" />
              <TableCell padding="checkbox" align="left">Имя</TableCell>
              <TableCell padding="checkbox" align="left">Спортивное общество</TableCell>
              <TableCell padding="checkbox" align="left">Очки</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allRunners.map(runner => (
              <TableRow key={runner.id} className={runner.isVisible ? '' : 'invisible-row'}>
                <TableCell padding="checkbox">
                  <Checkbox
                    className="controls-padding"
                    checked={runner.checked}
                    value={runner.id.toString()}
                    onChange={e => statusChange(+e.target.value)}
                  />
                </TableCell>
                <TableCell padding="checkbox">{runner.name}</TableCell>
                <TableCell padding="checkbox">{runner.team}</TableCell>
                <TableCell padding="checkbox">{runner.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
