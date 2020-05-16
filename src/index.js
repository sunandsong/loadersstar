import happy from './happy.jpg'
var img = new Image();
img.src=happy;
document.body.appendChild(img);

import login from './logo.png'
var loginimg = new Image();
loginimg.src=login;
document.body.appendChild(loginimg);

require('./index.scss')

console.log('hello webpack!')