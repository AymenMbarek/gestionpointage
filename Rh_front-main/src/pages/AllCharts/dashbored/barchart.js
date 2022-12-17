import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class barchart extends Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [{
              data: [5, 3, 8, 2, 4,  1, 1]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 200
              },
              plotOptions: {
                bar: {
                  barHeight: '80%',
                  distributed: true,
                  horizontal: true,
                  dataLabels: {
                    position: 'bottom'
                  },
                }
              },
              colors: ['#80e34f',
                '#f8b425',
                '#804ab4',
                '#3d1865',
                '#3c4ccf',
                '#f3219f',
                '#7a0786',
              ],
              dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    fontSize: '11',
                  colors: ['#eee'],
                  
                  fontWeight: 400
                },
                formatter: function (val, opt) {
                  return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
                },
                offsetX: 0,
                dropShadow: {
                  enabled: true
                }
              },
              stroke: {
                width: 1,
                colors: ['#fff']
              },
              xaxis: {
                categories: ['Tanger / Tetouan', 'Benguerir', 'Casablanca', 'Marrakech', 'Rabat', 'Agadir', 'Nador',
                ],
              },
              yaxis: {
                labels: {
                  show: false
                }
              },
              tooltip: {
                theme: 'dark',
                x: {
                  show: false
                },
                y: {
                  title: {
                    formatter: function () {
                      return ''
                    }
                  }
                }
              }
            },
          
          
          };
        }

      

        render() {
        return (
            <React.Fragment>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="300" />
            </React.Fragment>
        );
    }
}

export default barchart;