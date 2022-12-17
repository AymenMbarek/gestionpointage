import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Doughnut extends Component {
    getOption = () => {
        return {

            toolbox: {
                show: false,
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['Manpower', 'Tectra', 'Randstad', 'Chrono Intérim', 'Interim Express'],
                textStyle: {
                    color: ['#74788d'],
                    fontSize: '12'
                }
            },
            color: ['#02a499', '#f8b425', '#ec4561', '#38a4f8', '#3c4ccf'],

            series: [
                {
                    name: 'Nombre Personnes par',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '22',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 1548, name: 'Manpower' },
                        { value: 310, name: 'Tectra' },
                        { value: 234, name: 'Randstad' },
                        { value: 135, name: 'Chrono Intérim' },
                        { value: 300, name: 'Interim Express' }
                    ],
                }
            ]
        };
    };
    render() {
        return (
            <React.Fragment>
                <ReactEcharts style={{ height: "350px" }} option={this.getOption()} />
            </React.Fragment>
        );
    }
}
export default Doughnut;