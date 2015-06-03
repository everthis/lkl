'use strict';
var doc = document,
	_sms_val_shadow = doc.querySelector('.shadow.sms_val'),
    _preserve_btns = doc.querySelectorAll('.preserve_btn');


_preserve_btns[0].addEventListener('click', function() {
	_sms_val_shadow.classList.remove('hide');
});

_preserve_btns[2].addEventListener('click', function() {
	window.location.href = '/preservation.html';
});

var _header = doc.querySelector('.header .logo');
_header.addEventListener('click', function() {
	window.location.href = '/main.html';
});