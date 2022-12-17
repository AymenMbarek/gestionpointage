import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';
import ReactEcharts from "echarts-for-react";

class PolarChart extends Component {
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
                data: [ "Congé",
                    "Maladie",
                    "Injustifié",],
                textStyle: {
                    color: ['#74788d'],
                    fontSize: '12'
                }
            },
            color: [
                '#145494',
                '#76e041',
                '#402056'],

            series: [
                {
                    name: "",
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
                        { value: 3, name: 'Congé' },
                        { value: 2, name: 'Maladie' },
                        { value: 6, name: 'Injustifié' },
                    ],
                }
            ]
        };
    };
    render() {
        return (
            <React.Fragment>
                <ReactEcharts style={{ height: "340px" }} option={this.getOption()} />
            </React.Fragment>
        );
    }
}


export default PolarChart;   