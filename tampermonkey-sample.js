// ==UserScript==
// @name         Jira
// @version      1.0.1
// @author       Donnie Ian

// @match        https://*.atlassian.net/*

// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @require      https://raw.githubusercontent.com/websanova/js-url/master/url.js
// @require      https://raw.githubusercontent.com/caolan/async/master/dist/async.js
// @require      https://raw.githubusercontent.com/aui/art-template/master/lib/template-web.js

// @grant        unsafeWindow
// @grant        GM_addStyle
// ==/UserScript==

jQuery.noConflict();
var $ = jQuery;
$(function () {
});


GM_addStyle(`.fSCZnt{display: none;}`);
