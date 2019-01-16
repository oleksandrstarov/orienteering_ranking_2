import React, {Component} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

export default class TableRunners extends Component {
  state = {
  };

  render() {
    return (
      <Paper className='base-margin'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="left">Имя</TableCell>
              <TableCell align="left">Спортивное общество</TableCell>
              <TableCell align="left">Очки</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.allRunners.map(runner => {
              return (
                <TableRow key={runner.id}>
                  <TableCell>
                    <Checkbox
                      className='controls-padding'
                      checked={false}
                      value={runner.id.toString()}
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
