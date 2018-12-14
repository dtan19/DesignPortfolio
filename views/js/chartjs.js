
//get the chart object
const ctx = document.getElementById("radarChart");


const radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["Leadership", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            label: 'Product',
            data: [12, 19, 3, 17, 28, 24, 7],
            backgroundColor: "rgba(24,235,223,0.7)",
            borderColor: "rgba(25,241,24,0.4)",
            lineTension: 50,
            pointHoverBackgroundColor: "rgba(255,0,0, 0.9)"
        }, {
            label: 'Design',
            data: [100, 29, 5, 5, 20, 3, 10],
            backgroundColor: "rgba(83,200,100,0.7)",
            borderColor: "rgba(89,245,100,1)"
        }]
    }
});