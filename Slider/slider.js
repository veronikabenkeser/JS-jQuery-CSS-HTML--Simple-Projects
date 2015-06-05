var currentImg = 0;

var images = Array("http://i358.photobucket.com/albums/oo27/picturesqueworlds/tree3_zpstq9gvtgc.jpg", "http://i358.photobucket.com/albums/oo27/picturesqueworlds/sanfran3_zpskong5zp1.jpg");

$(document).ready(function() {
  switchImages();
  setInterval(switchImages, 6000);

});

function switchImages() {
  var newImage = images[currentImg];

  $(".slider").css("background-image", "url(" + newImage + ")");

  currentImg++;
  if (currentImg > images.length - 1) {
    currentImg = 0;

  }
}
