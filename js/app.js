var firstCat = document.getElementById('catPic');

var secondCat = document.getElementById('catPic2');

var clickCounterOne = 0;

var clickCounterTwo = 0;

var firstCatClicks = document.getElementById('numClicks');

var secondCatClicks = document.getElementById('numClicks2');

firstCat.addEventListener('click', function() {
  clickCounterOne += 1;
  firstCatClicks.innerHTML = `${clickCounterOne}`;
}, false);

secondCat.addEventListener('click', function() {
  clickCounterTwo += 1;
  secondCatClicks.innerHTML = `${clickCounterTwo}`;
}, false);
