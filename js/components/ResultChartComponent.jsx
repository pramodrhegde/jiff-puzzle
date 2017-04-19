import React from 'react';
import rd3 from 'react-d3';
let PieChart = rd3.PieChart;

export default class ResultChartComponent extends React.Component {

  render() {
    return <PieChart
      data={this.props.data}
      width={200}
      height={200}
      radius={100}
      innerRadius={0}/>;
  }
}
