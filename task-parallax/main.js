window.addEventListener('scroll', function (e) {
  console.log(document.body.scrollTop);
  var $parallax = document.getElementById('parallax');
  if (document.body.scrollTop < 175) {
  var posY = document.body.scrollTop * 1.5;
  $parallax.style.backgroundPosition = '0px '+(-posY)+'px';
  }
})