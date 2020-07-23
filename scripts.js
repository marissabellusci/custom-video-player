/*Get our elements*/

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

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

};

function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    console.log(this);
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

//below are two different ways to skip backwards/forwards:
    //click skip buttons or use L/R arrow keys

skipButtons.forEach(button => button.addEventListener('click',skip));
document.body.onkeyup = function(e){
    if (e.keyCode == '39'){
        console.log('25');
    }   video.currentTime += 25;
    if (e.keyCode == '37'){
        console.log('-10');
        video.currentTime -= 10;
    }
}

ranges.forEach(slider => slider.addEventListener('change',handleRangeUpdate));
