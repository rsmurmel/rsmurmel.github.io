var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '/Users/rsmurmel/Desktop/WebProjects/HTMLTest/images/IMG_1378.JPG') {
      myImage.setAttribute ('src','/Users/rsmurmel/Desktop/WebProjects/HTMLTest/images/IMG_1380.JPG');
    } else {
      myImage.setAttribute ('src','/Users/rsmurmel/Desktop/WebProjects/HTMLTest/images/IMG_1378.JPG');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Montenegro, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Montenegro, ' + storedName;
}
myButton.onclick = function () {
setUserName();
}