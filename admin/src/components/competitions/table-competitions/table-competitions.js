import React, {Component} from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import './table-competitions.css'

export default class TableCompetitions extends Component {
  state = {
    radioButtonState: ''
  };

  radioButtonChange = event => {
    this.props.radioButtonChange(+event.target.value);
    this.setState({radioButtonState: event.target.value});
  };

  render() {
    return (
      <Paper className='base-margin'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="none" className='padding-td' align="center"></TableCell>
              <TableCell padding="none" className='padding-td' align="center"></TableCell>
              <TableCell padding="none" className='padding-td' align="left">Статус</TableCell>
              <TableCell padding="dense" align="left">Название</TableCell>
              <TableCell padding="dense" align="left">Дата</TableCell>
              <TableCell padding="dense" align="left">Спортсмены</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.competitions.map(item => {
              return (
                <TableRow key={item.id}>
                  <TableCell padding="none" className='padding-td'>
                    <Checkbox
                      className='controls-padding'
                      checked={item.isAllowedUpdated === 'Y'}
                      disabled={item.isAllowedUpdated === null}
                      value={item.id.toString()}
                      onChange={(e) => this.props.statusChange(+e.target.value)}
                    />
                  </TableCell>
                  <TableCell padding="none" className='padding-td'>
                    <RadioGroup
                      className='controls-padding'
                      aria-label="competitions"
                      value={this.state.radioButtonState}
                      onChange={(e) => this.radioButtonChange(e)}
                    >
                      <FormControlLabel value={item.id.toString()} control={<Radio/>} label=""/>
                    </RadioGroup>
                  </TableCell>
                  <TableCell padding="none" className='padding-td'>
                    { item.status === 'IMPORTED' ? <Icon className='green' >check</Icon> : null }
                    { item.status === 'INVALID' ? <Icon className='red' >close</Icon> : null }
                    { item.status === 'VALID' ? <Icon className='blue' >access_time</Icon> : null }
                  </TableCell>
                  <TableCell padding="dense">
                    <Tooltip title={item.name} placement="bottom-start">
                      <a className='link' href={item.link}>{item.name}</a>
                    </Tooltip>
                  </TableCell>
                  <TableCell padding="dense">
                    <span className='date'>{item.date}</span>
                  </TableCell>
                  <TableCell padding="dense">{item.runners}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
