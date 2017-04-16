var vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn, controls, transcript, p;

// initialize video function
function initializePlayer() {
	// set object references
	vid = document.getElementById('my-video');  
	playbtn = document.getElementById('playpausebtn');
	seekslider = document.getElementById('seekslider');
	curtimetext = document.getElementById('current-time-text');
	durtimetext = document.getElementById('duration-time-text');
    mutebtn = document.getElementById('mutebtn');
    volumeslider = document.getElementById('volumeslider');
    fullscreenbtn = document.getElementById('fullscreenbtn');  
    controls = document.getElementById('controls');
    captions = document.getElementById('captions');
    p = document.querySelectorAll('span.p');
    transcript = document.getElementById("transcript");
    vidcontbar = document.getElementById("video-control-bar");
	// add event listeners
	playbtn.addEventListener("click", playPause, false);
	seekslider.addEventListener("click", vidseek, false);
	vid.addEventListener("timeupdate", seektimeupdate, false);
	mutebtn.addEventListener("click", vidmute, false);
	volumeslider.addEventListener("change", setvolume, false);
	fullscreenbtn.addEventListener("click", togglefullscreen, false);
	vid.addEventListener("ended", end, false);
    vid.addEventListener("timeupdate", highlight, false);
    vid.addEventListener("mouseout", mouseOut, false);
    vid.addEventListener("mouseover", mouseOver, false);
    vid.addEventListener("click", playPause, false);
    vid.addEventListener("seeking", seeked, false);
    transcript.addEventListener("click", sk, false);
    vid.addEventListener("onmouseout", mouseOut, false);
    vid.addEventListener("onmouseover", mouseOver, false);
    vidcontbar.addEventListener("mouseout", mouseOut, false);
    vidcontbar.addEventListener("mouseover", mouseOver, false);


//disable captions
 vid.textTracks[0].mode = "hidden"; 
}
// load initializePlayer function right after html
window.onload = initializePlayer;
// play and pause function
function playPause() {
	if(vid.paused) {
		vid.play();
		playbtn.innerHTML = "<img src='icons/pause-icon.png'>";
	} else {
		vid.pause();
		playbtn.innerHTML = "<img src='icons/play-icon.png'>";
	}
}

//on video end show play image 
//on video end remove the color from the last caption
function end(){
	playbtn.innerHTML="<img src='icons/play-icon.png'>";
	p[15].style.color="";
}
// change seek when seekbar is scrolled
function vidseek(e) {
	var pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
      vid.currentTime = pos * vid.duration;
}

// update seekbar to match with video
// adding duration and current time to the control bar
function seektimeupdate() {
	var newtime = vid.currentTime * (100 / vid.duration);
    seekslider.value = newtime;
    var curmins = Math.floor(vid.currentTime / 60);
    var cursecs = Math.floor(vid.currentTime - curmins * 60);
    var durmins = Math.floor(vid.duration / 60);
    var dursecs = Math.floor(vid.duration - durmins * 60);
    if(cursecs < 10) { cursecs = "0" + cursecs;}
    if(dursecs < 10) { dursecs = "0" + dursecs;}
    if(curmins < 10) { curmins = "0" + curmins;}
    if(durmins < 10) { durmins = "0" + durmins;}

    curtimetext.innerHTML = curmins+":"+cursecs;
    durtimetext.innerHTML = durmins+":"+dursecs;

}

// mutes the vid and unmutes the vid
function vidmute() {
	if(vid.muted) {
		vid.muted = false;
		// when the video is unmuted the volume slider's value is set to 100
		volumeslider.value = 100;
		mutebtn.innerHTML = "<img src='icons/volume-on-icon.png'>";
	} else {
		vid.muted = true;
		// when the mute button is clicked the volume slider's value is set to 0
		volumeslider.value = 0;
		mutebtn.innerHTML = "<img src='icons/volume-off-icon.png'>";
	}
}
// changes the volume of the vid
function setvolume() {
	vid.volume = volumeslider.value / 100;
}
// adding fullscreen for video
function togglefullscreen() {
	if (vid.requestFullScreen) {
		vid.requestFullScreen();
		vid.controls.style.display = "none";
	} else if(vid.webkitRequestFullScreen) {
		vid.webkitRequestFullScreen();
	} else if(vid.mozRequestFullScreen) {
		vid.mozRequestFullScreen();
	}
}

//on video play and mouseout hide controls and translate progress bar
function mouseOut() {
	if (vid.paused === false) {
    controls.style.visibility = "hidden";
    seekslider.style.transform = "translateY(30px)";
 }
}

//on mouseover show the control bar
function mouseOver() {
	controls.style.visibility = "visible";
    seekslider.style.transform = "translateY(-20px)";
    controls.style.transform = "translateY(-20px)";
}

//highlight text that corresponds with video
function highlight() {
	var curmins = Math.floor(vid.currentTime / 60);
    var cursecs = Math.floor(vid.currentTime - curmins * 60);

if (cursecs <= 3.50 ) {p[0].style.color="orange";
	 	p[0].style.backgoundcolor="";
	 } else if (cursecs >= 3.50 && cursecs <= 7.53) {
	 	p[1].style.color="orange";
	 	p[0].style.color="";
	 } else if (cursecs >= 7.54 && cursecs <= 10.40) {
	 	p[2].style.color="orange";
	 	p[1].style.color="";
	 }
	 else if (cursecs >= 10.41 && cursecs <= 13.90) {
	 	p[3].style.color="orange";
	 	p[2].style.color="";
	 }
	 else if (cursecs >= 13.91 && cursecs <= 17.94) {
	 	p[4].style.color="orange";
	 	p[3].style.color="";
	 }
	 else if (cursecs >= 17.95 && cursecs <= 21.30) {
	 	p[5].style.color="orange";
	 	p[4].style.color="";
	 }
	 else if (cursecs >= 21.31 && cursecs <= 25) {
	 	p[6].style.color="orange";
	 	p[5].style.color="";
	 } 
	 else if (cursecs >= 25.30 && cursecs <= 30.92) {
	 	p[7].style.color="orange";
	 	p[6].style.color="";
	 } 
	 else if (cursecs >= 31 && cursecs <= 33.30) {
	 	p[8].style.color="orange";
	 	p[7].style.color="";
	 }
	 else if (cursecs >= 33.31 && cursecs <= 38.40) {
	 	p[9].style.color="orange";
	 	p[8].style.color="";
	 }
	 else if (cursecs >= 38.41 && cursecs <= 41) {
	 	p[10].style.color="orange";
	 	p[9].style.color="";
	 }
	 else if (cursecs >= 42 && cursecs <= 45.40) {
	 	p[11].style.color="orange";
	 	p[10].style.color="";
	 }
	 else if (cursecs >= 45.41 && cursecs <= 48.40) {
	 	p[12].style.color="orange";
	 	p[11].style.color="";
	 }
	 else if (cursecs >= 48.41 && cursecs <= 52.30) {
	 	p[13].style.color="orange";
	 	p[12].style.color="";
	 }
	 else if (cursecs >= 52.31 && cursecs <= 56.40) {
	 	p[14].style.color="orange";
	 	p[13].style.color="";
	 }
	 else if (cursecs >= 56.41) {
	 	p[15].style.color="orange";
	 	p[14].style.color="";
     }   
}

//when the video is seeked change color of previouly highlighted text
function seeked() {
for (i = 0; i < p.length; i++) {
    p[i].style.color = "";
 }

}
//when the transcript is clicked the video seeks to the part of the the transcript thats clicked
function sk(e) {
	vid.currentTime = e.target.getAttribute('data-start');
    vid.play();
    playbtn.innerHTML = "<img src='icons/pause-icon.png'>";
    controls.style.visibility = "hidden";
    seekslider.style.transform = "translateY(30px)";
}




