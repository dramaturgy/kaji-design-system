$(function () {
  function generateChartOverall() {
    var _fakeData = {
      paid: 46,
      incomplete: 20,
      unpaid: 27,
      discount: 7
    };

    var chart = new Chart(document.getElementById('js_tuition_chart_overall').getContext('2d'), {
      type: 'pie',
      data: {
        labels: _.map( _.keys(_fakeData), function(k) { return k.charAt(0).toUpperCase() + k.slice(1) }),
        datasets: [{
          label: 'Overall Payments',
          data: _.values(_fakeData),
          borderWidth: 0,
          backgroundColor: ['hsla(275, 51%, 54%, 1)', 'hsla(36, 100%, 50%, 1)', 'hsla(4, 62%, 54%, 1)', 'hsla(207, 90%, 54%, 1)']
        }]
      },
      options: {
        cutoutPercentage: 65,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'right',
          labels: {
            boxWidth: 12
          }
        },
        tooltips: {
          backgroundColor: 'rgba(117, 102, 127, 1)',
          cornerRadius: 3,
          displayColors: false,
          titleFontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
          titleMarginBottom: 8,
          bodyFontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif'
        }
      }
    });
  }

  generateChartOverall();
});