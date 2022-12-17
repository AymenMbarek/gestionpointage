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
                data: ['Maçon Niv1','Maçon Niv2', 'Boiseur Niv1', 'Boiseur Niv2','Machiniste'],
                textStyle: {
                    color: ['#74788d']
                }
            },
            color: [    '#8fe329',
                '#146683',
                '#bb3463',
                '#1f21a1',
                '#532598'],
            series: [
                {
                    name: 'Nombre Personnes Par',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: 'Maçon Niv1' },
                        { value: 310, name: 'Maçon Niv2' },
                        { value: 234, name: 'Boiseur Niv1' },
                        { value: 135, name: 'Boiseur Niv2' },
                        { value: 1548, name: 'Machiniste' }
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