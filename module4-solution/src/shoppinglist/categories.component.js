(function () {
	'use strict';

	angular.module('MenuApp')
	.component('categories',{
		templateUrl: 'src/shoppinglist/templates/listcategory.template.html',
		bindings: {
			items: '<'
		}

	});
})();


