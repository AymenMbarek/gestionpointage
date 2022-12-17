import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class Pie extends Component {
    getOption = () => {
        return {
            toolbox: {
                show: false,
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['Groupe 1', 'Groupe 2', 'Groupe 3', 'Groupe 4', 'Groupe 5'],
                textStyle: {
                    color: ['#74788d']
                }
            },
            color: ['#dc6005',
                '#a4e58b',
                '#0cda1d',
                '#5236d2',
                '#3d1865'],
            series: [
                {
                    name: 'Nombre chantier Par',
                    type: 'Groupe',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: 'Groupe 1' },
                        { value: 1000, name: 'Groupe 2' },
                        { value: 234, name: 'Groupe 3' },
                        { value: 635, name: 'Groupe 4' },
                        { value: 358, name: 'Groupe 5' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    };
    render() {
        return (
            <React.Fragment>
                <ReactEcharts style={{ height: "350px" }}
                    option={this.getOption()}
                />
            </React.Fragment>
        );
    }
}
export default Pie;