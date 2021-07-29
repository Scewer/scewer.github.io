let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/Screenshot.jpg');
  } else {
    myImage.setAttribute ('src','images/copy.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
    myHeading.textContent='Dog is cool,' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent= 'Dog is cool,' + storedName;
}
myButton.onclick = function(){
    setUserName();
}


