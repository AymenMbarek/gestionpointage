import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class prodchart extends Component {
    constructor(props) {
        super(props);

        this.state = {
          
            series: [{
              data: [400, 540, 580, 690, 1100, 1200]
            }],
            options: {
              chart: {
                type: 'bar',
                height: 350
              },
              plotOptions: {
                bar: {
                  barHeight: '100%',
                  distributed: true,
                  horizontal: true,
                  dataLabels: {
                    position: 'bottom'
                  },
                }
              },
              colors: ['#02A425', '#446AA3', '#0D44DB', '#030583', '#4D026B', '#680828', '#CE585A', '#438D34',
                '#f48024', '#97227E'
              ],
              dataLabels: {
                enabled: true,
                textAnchor: 'start',
                style: {
                    fontSize: '12',
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
                categories: ['Maçonnerie', 'Coffrage', 'Betonnage', 'Carrelage', 'Plafonnage', 'Peinture'
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
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="330" />
            </React.Fragment>
        );
    }
}

export default prodchart;