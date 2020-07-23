/*Get our elements*/

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

/*Build our functions*/

function togglePlay(){
    if (video.paused){
        video.play();
        toggle.innerHTML = "&#9616;&#9616";
    }
    else {
        video.pause()
        toggle.innerHTML = "►";
    };

}

/*Hook up event listeners*/

//below are the three different ways to play and pause:
    //click video, click play button, and press spacebar

video.addEventListener('click',togglePlay);
toggle.addEventListener('click',togglePlay);
document.body.onkeyup = function(e){
    if (e.keyCode == '32');
    togglePlay();
}
