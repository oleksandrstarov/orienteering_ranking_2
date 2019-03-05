import React, { Component } from 'react';

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
import './table-competitions.css';
import * as Const from '../../constants/constants';

export default class TableCompetitions extends Component {
  state = {
    radioButtonState: '',
  };

  radioButtonChange = (event) => {
    const { radioButtonChange } = this.props;
    radioButtonChange(parseInt(event.target.value, 10));
    this.setState({ radioButtonState: event.target.value });
  };

  currentIcon = (status) => {
    if (status === 'IMPORTED') {
      return (<Icon className="green">check</Icon>);
    }
    if (status === 'INVALID') {
      return (<Icon className="red">close</Icon>);
    }
    if (status === 'VALID') {
      return (<Icon className="blue">access_time</Icon>);
    }
    return null;
  };

  render() {
    const { competitions, statusChange } = this.props;
    const { radioButtonState } = this.state;
    return (
      <Paper className="base-margin">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="none" className="padding-td" align="center" />
              <TableCell padding="none" className="padding-td" align="center" />
              <TableCell padding="none" className="padding-td" align="left">Статус</TableCell>
              <TableCell padding="dense" align="left">Название</TableCell>
              <TableCell padding="dense" align="left">Дата</TableCell>
              <TableCell padding="dense" align="left">Спортсмены</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {competitions.map(item => (
              <TableRow key={item.id}>
                <TableCell padding="none" className="padding-td">
                  <Checkbox
                    className="controls-padding"
                    checked={item.isAllowedUpdated === Const.YES}
                    disabled={!item.isAllowedUpdated}
                    value={item.id.toString()}
                    onChange={e => statusChange(parseInt(e.target.value, 10))}
                  />
                </TableCell>
                <TableCell padding="none" className="padding-td">
                  <RadioGroup
                    className="controls-padding"
                    aria-label="competitions"
                    value={radioButtonState}
                    onChange={e => this.radioButtonChange(e)}
                  >
                    <FormControlLabel value={item.id.toString()} control={<Radio />} label="" />
                  </RadioGroup>
                </TableCell>
                <TableCell padding="none" className="padding-td">
                  {this.currentIcon(item.status)}
                </TableCell>
                <TableCell padding="dense">
                  <Tooltip title={item.name} placement="bottom-start">
                    <a className="link" href={item.link}>{item.name}</a>
                  </Tooltip>
                </TableCell>
                <TableCell padding="dense">
                  <span className="date">{item.date}</span>
                </TableCell>
                <TableCell padding="dense">{item.runners}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
