// Add js here.
const video =  document.getElementById("videoplayer");
window.addEventListener('load', loadVideo);

// Load video.
function loadVideo () {
    video.load();
    video.autoplay = false;
    video.loop = false;
    volume.textContent = `${video.volume * 100}%`;
}

// Get elements. 
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const slower = document.getElementById("slower");
const faster = document.getElementById("faster");
const skip = document.getElementById("skip");
const mute = document.getElementById("mute");
const slider = document.getElementById("slider");
const volume = document.getElementById("volume");

// Play video.
play.addEventListener('click', playVideo);
function playVideo () {
    video.play();
} 

// Mute video.
mute.addEventListener('click', muteVideo);
function muteVideo () {
    if (video.muted == false) {
        video.muted = true;
        mute.textContent = "Unmute";
    }
    else {
        video.muted = false;
        mute.textContent = "Mute";
    }
}

// Pause video.
pause.addEventListener('click', pauseVideo);
function pauseVideo () {
    video.pause();
} 

// Slow down video.
slower.addEventListener('click', slowerVideo);
function slowerVideo () {
   if (video.playbackRate == 2){
    video.playbackRate = 1;
   }
   else if (video.playbackRate == 1){
    video.playbackRate = 0.5;
   }
   else {
    window.alert("Video is at slowest speed!");
   }
} 

// Speed up video.
faster.addEventListener('click', fasterVideo);
function fasterVideo () {
   if (video.playbackRate == 1){
    video.playbackRate = 2;
   }
   else if (video.playbackRate == 0.5){
    video.playbackRate = 1;
   }
   else {
    window.alert("Video is at fastest speed!");
   }
} 

// Skip ahead video.
skip.addEventListener('click', skipVideo);
function skipVideo () {
    if (video.currentTime + 15 > video.duration){
        video.currentTime = 0;
    }
    else {
        video.currentTime += 15;
    }
} 

// Change volumn.
slider.addEventListener('change', sliderVideo);
function sliderVideo () {
    video.volume = slider.value / 100;
    volume.textContent = `${slider.valueAsNumber}%`;
} 
