// ==UserScript==
// @namespace   https://github.com/aidan-gibson
// @name        Auto-Archive News
// @description Automatically fetch archive.ph versions of news sites
// @version     1.0
// @author      aidan-gibson
// @include     https://www.theatlantic.com/*
// @include     http://www.theatlantic.com/*
// @updateURL
// @downloadURL
// ==/UserScript==

// grab from archive.is or archive.ph (one or other could be down. default prefer .ph)
// if doesn't already exist, archive it
// auto run on certain sites
// safari should already b configured to automatically enable reader mode for both archive.is or archive.ph

var title = document.title;
var loc = window.location.href;

if (title == "Access Blocked") {
  window.open("http://web.archive.org/save/" + loc, "_blank");
  window.open("http://archive.is/?run=1&url=" + loc, "_blank");
}

//http://web.archive.org/save/URL

//http://archive.is/?run=1&url=
