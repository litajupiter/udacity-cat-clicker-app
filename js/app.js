var pic = document.getElementById('catPic');

var clickCounter = 0;

pic.addEventListener('click', function() {
  clickCounter += 1;
  console.log(clickCounter);
}, false);
