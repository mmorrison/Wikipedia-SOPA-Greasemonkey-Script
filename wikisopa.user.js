// ==UserScript==
// @name           Wikipedia Anti-SOPA Blackout Remove
// @namespace      mmorrison
// @include        http://en.wikipedia.org/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.js
// ==/UserScript==

domscript = document.createElement('script');
dtn = document.createTextNode('$(document).ready(function() {setTimeout(function() {var div, divs, sopa, _i, _len;divs = document.getElementsByTagName("div");for (_i = 0, _len = divs.length; _i < _len; _i++) {div = divs[_i];if (div.style) {div.style.display = "block";}}sopa = document.getElementById("mw-sopaOverlay");sopa.style.display = "none";}, 1000);});');

domscript.appendChild(dtn);
document.getElementsByTagName('HEAD')[0].appendChild(domscript);