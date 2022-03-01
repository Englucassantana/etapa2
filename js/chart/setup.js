const labels = table.getDate();
const data = {
  labels: labels,
  datasets: [{
    label: 'Capacidade - Atendimento Realizado',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: table.getDiff(),
  }]
};