'use strict';
var doc = document,
    _preserve_btns = doc.querySelectorAll('.preserve_btn'),
    _filter_btn = doc.querySelector('.filter_btn');

(function() {
	[].map.call(_preserve_btns, function(el) {
        el.addEventListener('click', function() {
			window.location.href = '/query_confirm.html';
		});
    });
})();

var _header = doc.querySelector('.header .logo');
_header.addEventListener('click', function() {
	window.location.href = '/main.html';
});
_filter_btn.addEventListener('click', function() {
	var filter_shadow = doc.querySelector('.shadow.filter');
	filter_shadow.classList.remove('hide');

});