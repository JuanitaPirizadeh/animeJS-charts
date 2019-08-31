// Our labels along the x-axis
var månader = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli','Augusti','September', 'Oktober', 'November','December'];
// For drawing the lines
var cykelturer = [0,0,3,8,15,30,25,40,50,40,15,0];


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: månader,
    datasets: [
      { 
        data: cykelturer,
        label: "cykelturer",
        borderColor: "#8e5ea2",
        fill: false
      }
    ]
  }
});


var ctx = document.getElementById('myChart3').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['No Name', 'Trädgården', 'Debaser Strand', 'Carmen', 'F12', 'Baltazar'],
        datasets: [{
            label: '# Antal ggr',
            data: [22, 10, 12, 5, 0, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Burgare", "allmänt vego", "Soppa", "Pizza <3", "Toast"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,

      }
    }
});