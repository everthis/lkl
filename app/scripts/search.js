'use strict';
var doc = document,
	_return_btn = doc.querySelector('.search_section .search_btn');

_return_btn.addEventListener('click', function() {
	window.location.href = '/main.html';
});

var _header = doc.querySelector('.header .logo');
_header.addEventListener('click', function() {
	window.location.href = '/main.html';
});