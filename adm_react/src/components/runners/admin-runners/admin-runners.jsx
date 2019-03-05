import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import TableRunners from '../table-runners/table-runners';
import CheckedRunners from '../checked-runners/checked-runners';
import MergedRunnersList from '../merged-runners-list/merged-runners-list';
import AdminService from '../../services/admin-service';

export default class AdminRunners extends Component {
  state = {
    allRunners: [],
    checkedRunners: [],
    mergedRunners: [],
  };

  service = new AdminService();

  async componentDidMount() {
    const allRunners = await this.service.getRunners();
    this.setState({ allRunners });
  }

  statusChange(id) {
    const { checkedRunners, allRunners } = this.state;
    const runner = allRunners.find(el => el.id === id);
    runner.checked = !runner.checked;
    if (runner.checked) {
      checkedRunners.push(runner);
    } else {
      const index = checkedRunners.findIndex(el => el.id === id);
      checkedRunners.splice(index, 1);
    }
    this.setState({
      allRunners: [...allRunners],
      checkedRunners: [...checkedRunners],
    });
  }

  addRunnerToMerge(id) {
    const { checkedRunners, mergedRunners } = this.state;
    const currentRunner = checkedRunners.find(runner => runner.id === id);
    mergedRunners.push({
      duplicates: checkedRunners,
      main: currentRunner,
    });
    checkedRunners.forEach((el) => {
      const runner = el;
      runner.isVisible = false;
    });
    this.setState({
      checkedRunners: [],
    });
  }

  cancelMergedRunners() {
    const { mergedRunners } = this.state;
    mergedRunners.forEach((el) => {
      el.duplicates.forEach((elem) => {
        const runner = elem;
        runner.checked = false;
        runner.isVisible = true;
      });
    });

    this.setState({
      mergedRunners: [],
    });
  }

  saveMergedRunners() {
    const { mergedRunners } = this.state;
    this.service.saveMergedRunners({ ...mergedRunners });
    this.cancelMergedRunners();
  }

  deleteMergedRunner(id) {
    const { mergedRunners } = this.state;
    const index = mergedRunners.findIndex(item => item.main.id === id);
    mergedRunners[index].duplicates.forEach((el) => {
      const runner = el;
      runner.isVisible = true;
      runner.checked = false;
    });
    mergedRunners.splice(index, 1);
    this.setState({
      mergedRunners,
    });
  }

  render() {
    const { allRunners, checkedRunners, mergedRunners } = this.state;
    return (
      <div className="admin-runners">
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <TableRunners allRunners={allRunners} statusChange={id => this.statusChange(id)} />
          </Grid>
          <Grid item xs={6}>
            {checkedRunners.length > 0
              ? (
                <CheckedRunners
                  checkedRunners={checkedRunners}
                  addRunnerToMerge={id => this.addRunnerToMerge(id)}
                />
              ) : null}

            {mergedRunners.length > 0
              ? (
                <MergedRunnersList
                  mergedRunners={mergedRunners}
                  cancelMergedRunners={() => this.cancelMergedRunners()}
                  saveMergedRunners={() => this.saveMergedRunners()}
                  deleteMergedRunner={id => this.deleteMergedRunner(id)}
                />
              ) : null}
          </Grid>
        </Grid>
      </div>
    );
  }
}
