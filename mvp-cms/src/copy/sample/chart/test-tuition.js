$(function () {
  function generateChartOverall() {
    var _fakeLabels = {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      grades: ['Grade 1', 'Grade 2', 'Grade 3'] }
    ,   _fakeData = [66, 34];

    var chart = new Chart(document.getElementById('js_tuition_chart_overall').getContext('2d'), {
      type: 'pie',
      data: {
        labels: ['Paid', 'Unpaid'],
        datasets: [{
          label: 'Overall Payments',
          data: _fakeData,
          borderWidth: 0,
          backgroundColor: ['hsla(275, 51%, 80%, 1)', 'hsla(275, 51%, 95%, 1)']
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