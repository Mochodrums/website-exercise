let song1 = document.getElementById("song1");
song1.addEventListener('click', playSong1);


function playSong1() {
    let michigan = new Audio("sounds/michigan.mp3");
	michigan.play();
}

