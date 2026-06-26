// toggles the video: plays it if paused, hides it if playing
function toggleVideo() {
    var video = document.getElementById("myVideo");
  
    if (video.paused) {
      video.style.display = "block";
      video.play();
    } else {
      video.pause();
      video.style.display = "none";
    }
  }