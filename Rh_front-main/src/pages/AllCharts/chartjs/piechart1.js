import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class PieChart1 extends Component {

    render() {
        const data = {
            labels: [
                "Consommé",
                "Solde"
            ],
            datasets: [
                {
                    data: [1123, 2763],
                    backgroundColor: [
                        "#150983",
                        "#A1059A"
                    ],
                    hoverBackgroundColor: [
                        "#03163A",
                        "#4D0632"
                    ],
                    hoverBorderColor: "#fff"
                }]
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
                        return currentValue + ' (' + percentage + '%)';
                    },
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    }
                }
            }
        }

        return (
            <React.Fragment>
                <Pie width={600} height={215} data={data} options={option} />
            </React.Fragment>
        );
    }
}

export default PieChart1;   