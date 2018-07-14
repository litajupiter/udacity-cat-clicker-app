var pic = document.getElementById('catPic');

var clickCounter = 0;

var numClicks = document.getElementById('numClicks');

pic.addEventListener('click', function() {
  clickCounter += 1;
  numClicks.innerHTML = `${clickCounter}`;
}, false);
