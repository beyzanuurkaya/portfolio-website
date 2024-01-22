var images = ["youngcentermain.jpg", "youngcenter1.jpg", "youngcenter2.jpg"];
var currentIndex = 0;

function goBack() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  document.getElementById("myImage").src = "./assets/" + images[currentIndex];
}

function goForward() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  document.getElementById("myImage").src = "./assets/" + images[currentIndex];
}