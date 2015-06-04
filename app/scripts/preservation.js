'use strict';
var doc = document,
	_shadows = doc.querySelectorAll('.shadow'),
	_passengers_body = doc.querySelector('.passengers_body'),
	_add_passenger_btn = doc.querySelector('.add_passenger_btn'),
	_add_child_btn = doc.querySelector('.add_child_btn'),
	_passengers_header = doc.querySelector('.passengers_header'),

	_name = _passengers_header.querySelector('.name'),
	_cre_type = _passengers_header.querySelector('.cre_type'),
	_cre_num = _passengers_header.querySelector('.cre_num'),
	_action = _passengers_header.querySelector('.action'),

	_need_passenger = doc.querySelector('.need_passenger'),
	_rage = doc.querySelector('.rage'),
	_ordering = doc.querySelector('.ordering'),
	_dupe = doc.querySelector('.dupe'),

	_submenu = doc.querySelector('.submenu'),
	_as = _submenu.getElementsByTagName('a'),
	_templ = doc.querySelector('.templ'),

	_confirm_preservation_btn = doc.querySelector('.confirm_preservation_btn'),
	_grey_return_btn = doc.querySelector('.grey_return_btn'),

    _per_passenger = _passengers_body.querySelector('.per_passenger'),
    _per_passengers = _passengers_body.querySelectorAll('.per_passenger'),
    _hint = _passengers_body.querySelector('.hint');


    (function() {
    	[].map.call(_as, function(el) {
            el.addEventListener('click', function(e) {
            	e.stopPropagation();
            	if (_passengers_body.querySelectorAll('.adult').length !== 0) {
	    			var a_text = el.textContent;
	    			var insert = _templ.cloneNode(true);
	    			var names = insert.querySelectorAll('.adult_name');
	    			for (var i = 0; i < names.length; i++) {
	    				names[i].innerHTML = a_text;
	    			};
	    			insert.classList.remove('templ');
					_passengers_body.appendChild(insert);
            	};
				_submenu.classList.add('hide');

    		});
        });
    })();

_passengers_body.addEventListener('click', function(ev) {
	if (ev.target.className === "delete") {
		var _target = ev.target;
		var _per = _target.parentNode.parentNode;
		_passengers_body.removeChild(_per);

		if (_passengers_body.querySelectorAll('.adult').length === 0) {
			var _childs = _passengers_body.querySelectorAll('.child');
			Array.prototype.forEach.call(_childs, function( node ) {
			    node.parentNode.removeChild( node );
			});
		};

		if (_passengers_body.querySelectorAll('.per_passenger').length === 0) {
			_hint.classList.remove('hide');
		};
	};
});


_per_passengers[0].addEventListener('click', function() {
	[].map.call(_per_passengers, function(el) {
	    el.classList.remove('hide');
	});
	_hint.classList.add('hide');
});

_per_passengers[1].addEventListener('click', function() {
	[].map.call(_per_passengers, function(el) {
	    el.classList.remove('hide');
	});
	_hint.classList.add('hide');
});

_hint.addEventListener('click', function() {
	this.classList.add('hide');
	_per_passenger.classList.remove('hide');
});

_add_passenger_btn.addEventListener('click', function() {
	window.location.href = '/add_passenger.html';
});

_add_child_btn.addEventListener('click', function() {
	// window.location.href = '/add_passenger.html';
	_submenu.classList.remove('hide');
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



