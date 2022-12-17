import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';

class PolarChart extends Component {

    render() {
        const data = {
            datasets: [{
                data: [
                    20,
                    16,
                    17,
                ],
                backgroundColor: [
                    "#0cda1d",
                    "#804ab4",
                    "#f3219f"
                ],
                label: 'My dataset', // for legend
                hoverBorderColor: "#fff"
            }],
            labels: [
                "Résidentiel",
                "Industriel",
                "Voirie",
            ]
        };

        const option = {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                        var total = meta.total;
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = parseFloat((currentValue / total * 100).toFixed(1));
                        return currentValue + ' ( ' + percentage + '%)';
                    },
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    }
                }
            }
        }

        return (
            <React.Fragment>
                <Polar width={600} height={350} data={data} options={option} />
            </React.Fragment>
        );
    }
}

export default PolarChart;   