'use strict';
var doc = document,
    _preserve_btns = doc.querySelectorAll('.preserve_btn');

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