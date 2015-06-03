'use strict';
var doc = document,
	_add_new = doc.querySelector('.add_new'),
	_edit_passengers = doc.querySelectorAll('a.edit_passenger');


_add_new.addEventListener('click', function() {
	window.location.href = '/new_passenger.html';
});

(function() {
	[].map.call(_edit_passengers, function(el) {
        el.addEventListener('click', function() {
			window.location.href = '/edit_passenger.html';
		});
    });
})();