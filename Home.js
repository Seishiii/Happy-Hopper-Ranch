var sIndex = 1;
sSlides(sIndex);

function plusSlides(n) {
  sSlides(sIndex += n);
}

function currentSlide(n) {
  sSlides(sIndex = n);
}
function sSlides(n) {
  var i;
  var slides = document.getElementsByClassName("pic");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {sIndex = 1}
  if (n < 1) {sIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[sIndex-1].style.display = "block";
  dots[sIndex-1].className += " active";
}
