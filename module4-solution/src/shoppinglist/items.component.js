(function () {
	'use strict';

	angular.module('MenuApp')
	.component('items',{
		templateUrl: 'src/shoppinglist/templates/listitems.template.html',
		bindings: {
			items: '<'
		}

	});
})();