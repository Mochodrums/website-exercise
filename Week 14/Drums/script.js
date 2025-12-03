let crash = document.getElementById('crash');

crash.addEventListener('click',playcrash);

function playcrash () {
    let crashsound = new Audio ('sounds/crash.mp3');
    crashsound.play();
}



let kick = document.getElementById('kick');

kick.addEventListener('click',playkick);

function playkick () {
    let kicksound = new Audio ('sounds/kick-bass.mp3');
    kicksound.play();
}


let snare = document.getElementById('snare');

snare.addEventListener('click',playsnare);

function playsnare() {
    let snaresound = new Audio ('sounds/snare.mp3');
    snaresound.play();
}



let tom1 = document.getElementById('tom1');

tom1.addEventListener('click',playtom1);

function playtom1 () {
    let tom1sound = new Audio ('sounds/tom-1.mp3');
    tom1sound.play();
}



let tom2 = document.getElementById('tom2');

tom2.addEventListener('click',playtom2);

function playtom2 () {
    let tom2sound = new Audio ('sounds/tom-2.mp3');
    tom2sound.play();
}



let tom3 = document.getElementById('tom3');

tom3.addEventListener('click',playtom3);

function playtom3 () {
    let tom3sound = new Audio ('sounds/tom-3.mp3');
    tom3sound.play();
}


let tom4 = document.getElementById('tom4');

tom4.addEventListener('click',playtom4);

function playtom4 () {
    let tom4sound = new Audio ('sounds/tom-4.mp3');
    tom4sound.play();
}