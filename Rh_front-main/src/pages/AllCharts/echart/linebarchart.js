import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class LineBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                colors: ['#3c4ccf', '#02a499'],
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        dataLabels: {
                            show: false
                        },

                    },
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false,
                },
                grid: {
                    borderColor: '#f8f8fa',
                    row: {
                        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                stroke: {
                    show: true,
                    width: 1.5,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: ['Maçonnerie', 'Coffrage', 'Betonnage', 'Carrelage', 'Plafonnage', 'Peinture'],
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                }
            },
            series: [{
                name: 'Quantité',
                data: [3200, 2610, 1400, 870, 2050, 1680]
            }, {
                name: 'Heures',
                data: [400, 540, 580, 690, 1100, 1200]
            }],
        }
    }
    render() {
        return (
            <React.Fragment>
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height="350" />
            </React.Fragment>
        );
    }
}
export default LineBar;

