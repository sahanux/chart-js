const ctx = document.getElementById("myChart").getContext("2d");

let delayed;

//Gradient Fill
let gradient = ctx.createLinearGradient(0,0,0,400);
gradient.addColorStop(0, "rgb(255,20,147)");
gradient.addColorStop(1, "rgb(255,192,203,0.3)");


const labels = [
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',

];

const data = {
    labels,
    datasets: [{
        data: [211, 326, 165, 350, 420, 370, 500, 375, 415],
        label: "Domino's Sales",
        fill: true,
        backgroundColor: gradient,
        borderColor:"#fff",
        // pointBackgroundColor: '#fff',
        // tension: 0.1,
        
    },
],

};

const config = {
    type:'line',
    data: data,
    options: {
        radius: 5,
        hitRadius: 30,
        hoverRadius: 12,
        responsive: true,
        animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
            },
          },
        scales: {
            y: {
                ticks: {
                    callback: function(value){
                        return "$" + value + "m";
                    },
                },
            },
        },
    },

};

const myChart = new Chart(ctx, config);