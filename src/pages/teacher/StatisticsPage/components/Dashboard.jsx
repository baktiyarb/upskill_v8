import React, {Component} from 'react';
import Chart from './Chart';
import highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

class Dashboard extends Component {
  render() {
    const options = {
      title: {
        text: '',
      },
      series: [
        {
          name: 'Не Выполнено',
          showInLegend: true,
          data: [100, 200, 30, 300, 30, 50, 100],
        },
        {
          name: 'Выполнено',
          showInLegend: true,
          data: [50, 250, 40, 70.9, 150],
        },
      ],
    };
    return (
      <div className="shema">
        {this.props.charts &&
          this.props.charts.map((chart) => {
            return (
              <div className="shema_both">
                <Chart
                  data={chart.serie}
                  userConfig={this.props.userConfig}
                  titleName={chart.title}
                />
                <HighchartsReact highcharts={highcharts} options={options} />
              </div>
            );
          })}
      </div>
    );
  }
}

export default Dashboard;
