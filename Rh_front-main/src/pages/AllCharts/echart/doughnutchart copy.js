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
                data: ['Entreprise 1', 'Entreprise 2', 'Entreprise 3', 'Entreprise 4', 'Entreprise 5'],
                textStyle: {
                    color: ['#74788d'],
                    fontSize: '12'
                }
            },
            color: ['#02a499', '#A1721A', '#59D1DA', '#38a4f8', '#3c4ccf'],
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
                        { value: 335, name: 'Entreprise 1' },
                        { value: 310, name: 'Entreprise 2' },
                        { value: 234, name: 'Entreprise 3' },
                        { value: 135, name: 'Entreprise 4' },
                        { value: 1548, name: 'Entreprise 5' }
                    ],
                }
            ]
        };
    };
    render() {
        return (
            <React.Fragment>
                <ReactEcharts style={{ height: "300px" }} option={this.getOption()} />
            </React.Fragment>
        );
    }
}
export default Doughnut;