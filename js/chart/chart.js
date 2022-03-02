const ctx = $('#chart');

function colorize(opaque) {
    return (ctx) => {
      const v = ctx.parsed.y;
      const c = v < 0 ? '#F44336'
        : v < 0 ? '#F46300'
        : v < 50 ? '#0358B6'
        : '#44DE28';
  
      return opaque ? c : Utils.transparentize(c, 1 - Math.abs(v / 150));
    };
  }

const config = {
    type: 'bar',
    data: {
        labels: table.getDate(),
        datasets: [{            
            data : table.getDiff(),
            
        }]
    },
    options: {
        elements:{
            bar:{
                backgroundColor: function (ctx) {
                    const v = ctx.parsed.y;
                    const c = v < 0 ? 'rgba(255, 235, 238,0.8)'
                        : v > 0 & v <= 10 ? 'rgba(232, 245, 233, 0.8)'
                        : 'rgba(255, 253, 231, 0.8)';
                    return c;
                },
                borderColor:  function (ctx) {
                    const v = ctx.parsed.y;
                    const c = v < 0 ? 'rgb(183, 28, 28)'
                        : v > 0 & v <= 10 ? 'rgb(27, 94, 32)'
                        : 'rgb(249, 168, 37)';
                    return c;
                },
                borderWidth: 2
            }
        },
        plugins:{
            legend :{
                display:false
            }
        },

        scales:{
            y:{
                title:{
                    display: true,
                    text: "CAPACIDADE - ATENDIMENTO REALIZADO"
                },
                ticks:{
                  padding: 20  
                }
            },
            x:{
                grid:{
                    display:false
                }
            }
        }
    }
}

Chart.defaults.color = '#000';
Chart.defaults.font.size = 16;
const chart = new Chart(ctx,config);

