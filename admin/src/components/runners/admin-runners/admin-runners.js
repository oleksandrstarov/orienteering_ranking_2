import React, {Component} from 'react';

import TableRunners from '../table-runners/table-runners';
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

  render() {
    return (
      <div className="Admin-runners">
        <h1><strong>Runners</strong></h1>
        <TableRunners allRunners={this.state.allRunners}/>
      </div>
    );
  }
}
