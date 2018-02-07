$(function () {
  // Chart test
  function generateChartPerfomance() {
    var _fakeLabels = {
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      grades: ['Grade 1', 'Grade 2', 'Grade 3'] }
    ,   _fakeData = [65, 59, 80];

    var chart = new Chart(document.getElementById('js_tuition_chart_performance').getContext('2d'), {
      type: 'horizontalBar',
      data: {
        labels: _fakeLabels.grades,
        datasets: [{
          label: "Payment Performance",
          data: _fakeData,
          fill: false,
          backgroundColor: 'hsla(275, 51%, 80%, 1)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: true,
              max: 100,
              fontSize: '10',
              fontColor: 'rgba(117, 102, 127, .8)'
            }
          }],
          yAxes: [{
            height: 60,
            categoryPercentage: 1,
            barPercentage: 1,
            maxBarThickness: 16,
            gridLines: {
              drawBorder: false,
            },
            ticks: {
              fontSize: '12',
              fontColor: 'rgba(68, 60, 74, .8)',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif'
            }
          }]
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
          // display: false
          position: 'right',
          labels: {
            boxWidth: 12
          }
        }
      }
    });
  }

  generateChartPerfomance();
  generateChartOverall();
});