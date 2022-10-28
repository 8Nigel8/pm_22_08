const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec']
const data = {
    labels:labels,
    datasets:[{
        label: 'Revenue',
        backgroundColor: '#85c875',
        borderColor: '#85c875',
        data: [2000, 3000, 5000, 10000, 6000, 4000, 3000, 3600, 10000, 10000, 3000, 1000],
        fill: 'start',
        pointRadius: 1,
        pointBackgroundColor: '#85c875',
    },
    {
        label: 'Order',
        backgroundColor: '#f1a80a',
        borderColor: '#f1a80a',
        data: [2000, 3200, 7000, 15500, 6000, 4000, 4400, 6000, 10000, 9000, 5000, 3000],
        fill: 'start',
        pointRadius: 1,
        pointBackgroundColor: '#f1a80a',
    },
    {
        label: 'Tax',
        backgroundColor: '#0bc4df',
        borderColor: '#0bc4df',
        data: [3000, 5000, 10000, 15000, 10000, 2000, 2000, 2000, 2000, 15000, 2000, 5000],
        fill: 'start',
        pointRadius: 1,
        pointBackgroundColor: '#0bc4df',
    },
    {
        label: 'Shipment',
        backgroundColor: '#3366ff',
        borderColor: '#3366ff',
        data: [2500, 3000, 5000, 10000, 10000, 6000, 3000, 3000, 10000, 13000, 3000, 1000],
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