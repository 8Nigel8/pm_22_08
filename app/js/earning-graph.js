const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec']
const data = {
    labels:labels,
    datasets:[{
        label: 'Revenue',
        backgroundColor: '#85c875',
        borderColor: '#85c875',
        data:[],
        fill: 'start',
        pointRadius: 1,
        pointBackgroundColor: '#85c875',
    },
    {
        label: 'Order',
        backgroundColor: '#f1a80a',
        borderColor: '#f1a80a',
        data:[],
        fill: 'start',
        pointRadius: 1,
        pointBackgroundColor: '#f1a80a',
    },
    {
        label: 'Tax',
        backgroundColor: '#0bc4df',
        borderColor: '#0bc4df',
        data:[],
        fill: 'start',
        pointRadius: 1,
        pointBackgroundColor: '#0bc4df',
    },
    {
        label: 'Shipment',
        backgroundColor: '#3366ff',
        borderColor: '#3366ff',
        data:[],
        fill: 'start',
        pointRadius: 1,
        pointBackgroundColor: '#3366ff',
    }
]}

const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                display:false
            }
        },
        tension: 0.5,
        scales: {
            x: {
                grid: {
                borderWidth: 2,
                borderDash: [5, 5],
                borderDashOffset: 3,
                tickColor:'white'
                },
                ticks: {
                    color: '#777777',
                }
            },
            y: {
                tickColor:'white',
                grid: {
                borderWidth: 2,
                borderDash: [5, 5],
                borderDashOffset: 3,
                },
                tickColor:'white',
                ticks: {
                    stepSize:5000,
                    padding: 2,
                }
            },

        }
    },
};

const earning_graph = new Chart(
    document.getElementById('earning_graph'),
    config
);
$.ajax("./data.json").done(function (response) {
    earning_graph.data.datasets[0].data = response.data1;
    earning_graph.data.datasets[1].data = response.data2;
    earning_graph.data.datasets[2].data = response.data3;
    earning_graph.data.datasets[3].data = response.data4;
    earning_graph.update();
});