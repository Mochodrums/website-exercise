let clicks = [];

let min_clicks = 10;

let tapButtonVariable = document.getElementById('tapButton');
tapButtonVariable.addEventListener('click', getBPM);

function getBPM() {
    let date_right_now = Date.now();

    clicks.push(date_right_now) ;

    console.log(clicks)

    if (clicks.length >= min_clicks) {
        let calculateBPM = calculateBPMFromClicks(clicks);

        alert('your calculated BPM is: ' + calculateBPM);

        clicks = [];
    }
}

function calculateBPMFromClicks(clickTimestamps) {
    let totalInterval = 0;


    for (let i = 1; i < clickTimestamps.length; i++) {
        let interval = clickTimestamps[i] - clickTimestamps[i-1];
        console.log(interval);

        totalInterval += interval;
    }

    let numIntervals = clickTimestamps.length -1;

    let averageInterval = totalInterval / numIntervals;

    return Math.round(60000/averageInterval);
}
   