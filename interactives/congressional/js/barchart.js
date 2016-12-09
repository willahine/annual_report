$(function() {
  Highcharts.setOptions({
      colors: ['#0065a4', '#0faa91 ','#484848','#004165'  ]
  });
  $('#hcContainer').highcharts({
    data: {
      googleSpreadsheetKey: '17cx_zeKJmUzc4FDjKM4ZXPkQhhioOeQn69ps72HZtOE',
    },

      chart: {
        type: 'column',
        backgroundColor: '#ffffff',
        border: 'none',
        color: '#000',
        plotShadow: true
      },
      credits: {
        enabled: true,
        href: "#",
        text: '',
        style: {
          cursor: 'pointer',
          color: '#353535',
          fontSize: '10px'
        }
      },

     title: {
        text:''
        },

      xAxis: {
        labels: {
          enabled:false,
          style: {
            color: '#353535',
            fontSize: '14px'
          }
        },
        categories: [ ],
        crosshair: true
      },
      yAxis: {
         gridLineWidth: 0,
        min: 0,
        labels: {
          enabled: true,
          style: {
            color: '#353535',
            fontSize: '14px'
          }
        },
        title: {
          text: null,
          style: {
            color: '#ffffff',
            fontWeight: 'bold',
            fontSize: '16px'
          }
        }

      },
      tooltip: {
        backgroundColor: '#FFF',
        style: {
          color: '#000',
          fontWeight: 'bol'
        },
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      legend: {
        title: {
          text: 'Think Tanks<br/><span style="font-size: 9px; color: #666; font-weight: normal">(Click each institution to hide)</span>',
          style: {
            fontStyle: 'italic',
            color: '#353535'
          }
        },
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal',
        itemStyle: {
          color: '#353535'
        },
        itemHoverStyle: {
          color: '#353535'
        }
      },

    });
  });
