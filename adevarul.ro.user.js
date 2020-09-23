// ==UserScript==
// @name         adevarul.ro
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  remove crap
// @author       You
// @match        http*://*.adevarul.ro/*
// @include      https://adevarul.ro
// ==/@require      https://code.jquery.com/jquery-1.11.1.js
// @grant        none
// ==/UserScript==

(function($) {
    'use strict';

    $("span:contains('realitatea.net')").parents("article").hide();
    $("span:contains('click.ro')").parents("article").hide();
    $("span:contains('gsp.ro')").parents("article").hide();
    $("span:contains('wowbiz.ro')").parents("article").hide();
    $("span:contains('gandul.info')").parents("article").hide();
    $("span:contains('fanatik.ro')").parents("article").hide();
    $("article.celebritati.entertainment, article.prosport").hide();
    $("div.cross-gsp").hide();

})(jQuery);