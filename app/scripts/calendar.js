'use strict';
var doc = document,
	_return_btn = doc.querySelector('.calendar_section .return_btn');

_return_btn.addEventListener('click', function() {
	window.location.href = '/main.html';
});