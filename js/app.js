const display = document.getElementById("display");

const catname1 = document.getElementById("cat1");
const catname2 = document.getElementById("cat2");
const catname3 = document.getElementById("cat3");
const catname4 = document.getElementById("cat4");
const catname5 = document.getElementById("cat5");

const catpic1 = document.getElementById("catpic1");
const catpic2 = document.getElementById("catpic2");
const catpic3 = document.getElementById("catpic3");
const catpic4 = document.getElementById("catpic4");
const catpic5 = document.getElementById("catpic5");

const catcounter1 = document.getElementById("catCounter1");

catname1.addEventListener('click', function() {
   display.innerHTML = "<img src=\"img/catface1.jpg\">";
}, false);

catname2.addEventListener('click', function() {
   display.innerHTML = "<img src=\"img/catleopard.jpg\">";
}, false);

catname3.addEventListener('click', function() {
   display.innerHTML = "<img src=\"img/catforward.jpg\">";
}, false);

catname4.addEventListener('click', function() {
   display.innerHTML = "<img src=\"img/catup.jpg\">";
}, false);

catname5.addEventListener('click', function() {
   display.innerHTML = "<img src=\"img/catcoverface.jpg\">";
}, false);



// catname1.addEventListener('click', function() {
//    catpic1.style.display = "block";
// }, false);


// var firstCat = document.getElementById('catPic');
// var secondCat = document.getElementById('catPic2');
// var clickCounterOne = 0;
// var clickCounterTwo = 0;
// var firstCatClicks = document.getElementById('numClicks');
// var secondCatClicks = document.getElementById('numClicks2');
//
// firstCat.addEventListener('click', function() {
//   clickCounterOne += 1;
//   firstCatClicks.innerHTML = `${clickCounterOne}`;
// }, false);
//
// secondCat.addEventListener('click', function() {
//   clickCounterTwo += 1;
//   secondCatClicks.innerHTML = `${clickCounterTwo}`;
// }, false);
