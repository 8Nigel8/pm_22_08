let ctx = document.getElementById('marceting_camping').getContext('2d');
let marceting_camping = new Chart(ctx,{
    type: 'doughnut',
    data:{
        labels: [
          'Research',
          'Information',
          'Product Desing',
          'Pacaging'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [30, 17, 13,8],
          backgroundColor: [
            '#85c875',
            '#00cccc',
            '#3366ff',
            '#f1a80a'
          ],
        }]
      },
    options: {
      plugins: {
        legend: {
          display: false,
        }
      }
    },
    plugins: [{
      id: 'text',
      beforeDraw: function (chart, a, b) {
          let width = chart.width,
              height = chart.height,
              ctx = chart.ctx;

          ctx.restore();
          let fontSize = (height / 114).toFixed(2);
          ctx.font = fontSize + "em sans-serif";
          ctx.textBaseline = "middle";

          let text = 'MC',
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;

          ctx.fillText(text, textX, textY);
          ctx.save();
      }
  }],
})