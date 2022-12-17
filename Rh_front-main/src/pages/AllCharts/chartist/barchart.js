import React, { Component } from "react";
import ChartistGraph from "react-chartist";

class barchart extends Component {
  render() {
    var barChartData = {
     
      series: [
        [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
        [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
      ]
    };
    var barChartOptions = {
      chart: {
        toolbar: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    
    colors: ['#34c38f'],
    grid: {
        borderColor: '#f1f1f1',
    },
    xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
    }
    };

    return (
      <React.Fragment>
        <ChartistGraph
          style={{ height: "300px" }}
          data={barChartData}
          options={barChartOptions}
          type={"Bar"}
        />
      </React.Fragment>
    );
  }
}

export default barchart;
