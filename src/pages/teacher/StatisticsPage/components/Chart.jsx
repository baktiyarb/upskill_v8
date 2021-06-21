import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// class Chart extends Component {
//   state = {
//     chartData: {
//       chart: {
//         type: 'pie',
//         marginBottom: 100,
//       },
//       title: {
//         text: this.props.titleName,
//       },
//       subtitle: {
//         // text:
//         //   (
//         //     this.props.data.reduce(
//         //       (accumulator, obj) => accumulator + obj.y,
//         //       0
//         //     ) / 1000
//         //   ).toFixed(2) + ' %',
//         text: '65%',
//         floating: true,
//         style: {
//           fontSize: 32,
//           fontWeight: 'bold',
//           color: '#000000',
//         },
//         y: 170,
//       },
//       series: [
//         {
//           data: [
//             {
//               name: 'Не выполнено',
//               y: 200680,
//             },
//             {
//               name: 'Выполневно',
//               y: 744775,
//             },
//           ],
//         },
//       ],
//       ...this.props.userConfig,
//     },
//   };

//   render() {
//     const testManage = () => {
//       // eslint-disable-next-line react/no-direct-mutation-state
//       this.state = null;
//     };

//     return (
//       <>
//         {/* <button onClick={testManage}>Manage</button> */}
//         <HighchartsReact
//           highcharts={Highcharts}
//           options={this.state.chartData}
//         />
//       </>
//     );
//   }
// }

const list = {
  chartData: {
    chart: {
      type: 'pie',
      marginBottom: 100,
    },
    title: {
      text: '',
    },
    subtitle: {
      text: '65%',
      floating: true,
      style: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
      },
      y: 170,
    },
    series: [
      {
        data: [
          {
            name: 'Не выполнено',
            y: 200680,
          },
          {
            name: 'Выполневно',
            y: 744775,
          },
        ],
      },
    ],
  },
};

const Chart = (props) => {
  const [state, setState] = useState(null);

  const manageState = (message) => {
    const series = [
      {
        data: [
          {
            name: 'Not compliated',
            y: 2,
          },
          {
            name: 'Complete',
            y: 74,
          },
        ],
      },
    ];

    const newObj = {
      ...state,
      series,
    };

    setState(newObj);
  };

  useEffect(() => {
    const info = {
      ...list.chartData,
      ...props.userConfig,
    };

    setState(info);
  }, []);

  return <HighchartsReact highcharts={Highcharts} options={state} />;
};

export default Chart;
