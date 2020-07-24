/*Get our elements*/

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const expand = player.querySelector('.expand')

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
};

function handleRangeUpdate(){
    video[this.name] = this.value;
    console.log(this.name);
    console.log(this.value);}

function handleProgress(){
    let percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
};    

function scrub(e){
    console.log(e);
    scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};

function expandWindow(){
    if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
}};

/*Hook up event listeners*/

//below are the three different ways to play and pause:
    //click video, click play button, and press spacebar

video.addEventListener('click',togglePlay);
toggle.addEventListener('click',togglePlay);



//below are two different ways to skip backwards/forwards:
    //click skip buttons or use L/R arrow keys

skipButtons.forEach(button => button.addEventListener('click',skip));


ranges.forEach(slider => slider.addEventListener('change',handleRangeUpdate));
ranges.forEach(slider => slider.addEventListener('mousedown', function() {
    slider.addEventListener('mousemove', handleRangeUpdate);
}
))

video.addEventListener('timeupdate',handleProgress);

let mousedown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove', (e) => {
    if (mousedown === true){
    scrub(e)}
    else return;

});
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

expand.addEventListener('click',expandWindow);



