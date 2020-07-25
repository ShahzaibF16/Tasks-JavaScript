



// / create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}



var paraGraph0 = document.getElementById("paraGraph0");
var paraGraph1 = document.getElementById("paraGraph1");
var paraGraph2 = document.getElementById("paraGraph2");
var paraGraph3 = document.getElementById("paraGraph3");

function zoomIn0() {
  paraGraph0.style.fontSize = "30px";
}
function zoomIn1() {
  paraGraph1.style.fontSize = "30px";
}
function zoomIn2() {
  paraGraph2.style.fontSize = "30px";
}
function zoomIn3() {
  paraGraph3.style.fontSize = "30px";
}
function zoomOut0() {
  paraGraph0.style.fontSize = "10px";
}
function zoomOut1() {
  paraGraph1.style.fontSize = "10px";
}
function zoomOut2() {
  paraGraph2.style.fontSize = "10px";
}
function zoomOut3() {
  paraGraph3.style.fontSize = "10px";
}

