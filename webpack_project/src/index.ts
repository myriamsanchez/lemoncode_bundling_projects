const logoImg = require('./content/webpack-logo-on-white-bg.png');

const messageToDisplay: string = "Hello World";

document.getElementById('page-background').append(messageToDisplay);

const img = document.createElement('img');
img.src = logoImg;

document.getElementById('imgContainer').appendChild(img);