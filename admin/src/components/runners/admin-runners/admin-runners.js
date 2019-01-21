import React, {Component} from 'react';

import TableRunners from '../table-runners/table-runners';
import CheckedRunners from '../checked-runners/checked-runners';
import MergedRunnersList from '../merged-runners-list/merged-runners-list';
import Grid from '@material-ui/core/Grid';
import AdminService from '../../services/admin-service';

export default class AdminRunners extends Component {

  state = {
    allRunners: [],
    checkedRunners: [],
    mergedRunners: []
  };

  async componentDidMount() {
    const runners = new AdminService();
    const allRunners = await runners.getRunners();
    this.setState({allRunners: allRunners});
    console.log(this.state.allRunners);
  }

  statusChange(id) {
    let runner = this.state.allRunners.find(el => el.id === id);
    let checkedRunners = this.state.checkedRunners;
    runner.checked = !runner.checked;
    if (runner.checked) {
      checkedRunners.push(runner);
    } else {
      const index = checkedRunners.findIndex((runner) => runner.id === id);
      checkedRunners.splice(index, 1);
    }
    this.setState({
      allRunners: [...this.state.allRunners],
      checkedRunners: [...this.state.checkedRunners]
    });
  };

  addRunnerToMerge(id) {
    const checkedRunners = this.state.checkedRunners;
    const mergedRunners = this.state.mergedRunners;
    const currentRunner = checkedRunners.find((runner) => runner.id === id);
    mergedRunners.push({
      duplicates: checkedRunners,
      main: currentRunner
    });
    checkedRunners.forEach(runner => {
      runner.isVisible = false;
    });
    this.setState({
      checkedRunners: []
    });
  };

  cancelMergedRunners() {
    let mergedRunners = this.state.mergedRunners;
    mergedRunners.forEach(el => {
      el.duplicates.forEach(runner => {
        runner.checked = false;
        runner.isVisible = true;
      });
    });

    this.setState({
      mergedRunners: []
    });
  }

  saveMergedRunners() {
    const adminService = new AdminService();
    adminService.saveMergedRunners(this.state.mergedRunners);

    this.cancelMergedRunners();
  }

  render() {
    return (
      <div className="Admin-runners">
        <h1><strong>Runners</strong></h1>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <TableRunners allRunners={this.state.allRunners} statusChange={(id) => this.statusChange(id)}/>
          </Grid>
          <Grid item xs={6}>
            {this.state.checkedRunners.length > 0 ?
              <CheckedRunners checkedRunners={this.state.checkedRunners}
                              addRunnerToMerge={(id) => this.addRunnerToMerge(id)}
              /> : null}

            {this.state.mergedRunners.length > 0 ?
              <MergedRunnersList mergedRunners={this.state.mergedRunners}
                                 cancelMergedRunners={() => this.cancelMergedRunners()}
                                 saveMergedRunners={()=> this.saveMergedRunners()}
              /> : null}
          </Grid>
        </Grid>
      </div>
    );
  }
}
