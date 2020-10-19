



let input = document.querySelector('.input')
let watchingCounter = document.querySelector('.watchingCounter')
let subscriberCounter = document.querySelector('.subscriberCounter')
var ctx = document.getElementById('myChart').getContext('2d');

let getResults = () => {
    let inputResult = input.value
    watchingCounter.innerHTML = `+ ${Math.floor(inputResult * 0.91)}`
    subscriberCounter.innerHTML = `+ ${Math.floor(inputResult * 0.17)}`
}


getDiogramResult = () => {

    Chart.defaults.global.legend.display = false;
    let inputResult = input.value
    let arr = [0, 0, 0, 0, 0, 0, 0, 0]
    arr = arr.map((item, index) => {
        if (index <= 1) {
            return item == 0
        }
        else {
            return item = item + inputResult / Math.floor(Math.random() * (100 - 47) + 47)
        }
    })

    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '1 день', '2 день', '3 день', '4 день', '5 день', '6 день', '7 день'],
            datasets: [{
                label: '',
                data: arr,

                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    '#7045C4'
                ],
                borderWidth: 2,

                pointStyle: 'circle',
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#7045C4',
                pointBorderWidth: 2,
                pointRadius: 4,
                cubicInterpolationMode: 'monotone',

            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        color: 'red',
                        suggestedMin: 60,
                        suggestedMax: 300,
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}


getDiogramResult()
input.addEventListener('input', event => {
    getResults()
    getDiogramResult()
})