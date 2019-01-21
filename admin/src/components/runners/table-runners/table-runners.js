import React, {Component} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import './table-runners.css'

export default class TableRunners extends Component {
  state = {
  };

  render() {
    return (
      <Paper className='base-margin'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" align="center"></TableCell>
              <TableCell align="left">Имя</TableCell>
              <TableCell align="left">Спортивное общество</TableCell>
              <TableCell align="left">Очки</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.allRunners.map(runner => {
                return (
                    <TableRow key={runner.id} className={runner.isVisible ? '': 'invisible-row'}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        className='controls-padding'
                        checked={runner.checked}
                        value={runner.id.toString()}
                        onChange={(e) => this.props.statusChange(+e.target.value)}
                      />
                    </TableCell>
                    <TableCell>{runner.name}</TableCell>
                    <TableCell>{runner.team}</TableCell>
                    <TableCell>{runner.points}</TableCell>
                  </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
