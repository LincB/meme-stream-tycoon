import React, {Component} from 'react';
import StatDisplay from './StatDisplay';

class StatsBox extends Component {

  labels = {
    'balance': 'Bank balance',
    'users': 'User count',
    'staff': 'Number of staff',
    'days': 'Days since launch'
  };

  render() {
    return (
      <div className="stats-box">
        {Object.keys(this.labels).map(
          key => <StatDisplay key={key} label={this.labels[key]} value={this.props[key]}/>
        )}
      </div>
    );
  }
}

export default StatsBox;