'use strict';
var doc = document,
	_shadows = doc.querySelectorAll('.shadow'),
	_passengers_body = doc.querySelector('.passengers_body'),
	_add_passenger_btn = doc.querySelector('.add_passenger_btn'),
	_passengers_header = doc.querySelector('.passengers_header'),

	_name = _passengers_header.querySelector('.name'),
	_cre_type = _passengers_header.querySelector('.cre_type'),
	_cre_num = _passengers_header.querySelector('.cre_num'),
	_action = _passengers_header.querySelector('.action'),

	_need_passenger = doc.querySelector('.need_passenger'),
	_rage = doc.querySelector('.rage'),
	_ordering = doc.querySelector('.ordering'),
	_dupe = doc.querySelector('.dupe'),

	_confirm_preservation_btn = doc.querySelector('.confirm_preservation_btn'),
	_grey_return_btn = doc.querySelector('.grey_return_btn'),

    _per_passenger = _passengers_body.querySelector('.per_passenger'),
    _hint = _passengers_body.querySelector('.hint');


_hint.addEventListener('click', function() {
	this.classList.add('hide');
	_per_passenger.classList.remove('hide');
});

_add_passenger_btn.addEventListener('click', function() {
	window.location.href = '/add_passenger.html';
});

_confirm_preservation_btn.addEventListener('click', function() {
	window.location.href = '/countdown.html';
});

_grey_return_btn.addEventListener('click', function() {
	window.location.href = '/preservation_fail.html';
});

_name.addEventListener('click', function() {
	[].map.call(_shadows, function(el) {
        el.classList.add('hide');
    });
	_need_passenger.classList.remove('hide');
});

_cre_type.addEventListener('click', function() {
	[].map.call(_shadows, function(el) {
        el.classList.add('hide');
    });
	_rage.classList.remove('hide');
});

_cre_num.addEventListener('click', function() {
	[].map.call(_shadows, function(el) {
        el.classList.add('hide');
    });
	_ordering.classList.remove('hide');
});

_action.addEventListener('click', function() {
	[].map.call(_shadows, function(el) {
        el.classList.add('hide');
    });
	_dupe.classList.remove('hide');
});

var _header = doc.querySelector('.header .logo');
_header.addEventListener('click', function() {
	window.location.href = '/main.html';
});