(function () {
	'use strict';

	angular.module('data')
	.service('MenuDataService',MenuDataService);

	MenuDataService.$inject=['$http'];
	function MenuDataService($http) {
		var service=this;

		service.getAllCategories=function () {
			return $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/categories.json"
			})
			.then(function (result) {
				console.log("Categories  : ",result.data);
				return result.data;
			});
			//console.log("getAllCategories data : ",response.data);
			//return response;
		}

		service.getItemsForCategory=function (categoryShortName) {
			return $http({
				method: "GET",
				url: "https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName
			})
			.then(function (result) {
				console.log("Item for Category : ",categoryShortName," : ",result.data.menu_items);
				return result.data.menu_items;
			});
			//console.log("getItemsForCategory data: ",response.data);
			
			
		}

	}

})();