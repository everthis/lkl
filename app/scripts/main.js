'use strict';
var doc = document,
    _inputs = doc.querySelector('.search_inputs'),
    _origin = _inputs.querySelector('.origin'),
    _dest = _inputs.querySelector('.dest'),
    _time = _inputs.querySelector('.time'),
    _type = _inputs.querySelector('.type'),
    _query_btn = _inputs.querySelector('.query_btn'),
	_train_type_shadow = doc.querySelector('.shadow.train_type'),
	_cancel_btn = _train_type_shadow.querySelector('.cancel_btn');

_origin.addEventListener('focus', function() {
	window.location.href = '/search.html';
});

_dest.addEventListener('focus', function() {
	window.location.href = '/search.html';
});

_time.addEventListener('focus', function() {
	window.location.href = '/calendar.html';
});

_type.addEventListener('focus', function() {
	_train_type_shadow.classList.remove('hide');
});

_query_btn.addEventListener('click', function() {
	window.location.href = '/query_list.html';
});

_cancel_btn.addEventListener('click', function() {
	_train_type_shadow.classList.add('hide');
});

var _header = doc.querySelector('.header .logo');
_header.addEventListener('click', function() {
	window.location.href = '/main.html';
});