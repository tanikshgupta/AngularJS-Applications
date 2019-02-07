( function () {

	'use strict';
	angular.module('ShoppingListCheckOff' , [])
	.controller('ToBuyController', ToBuyController )
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];	
	function ToBuyController(ShoppingListCheckOffService) {
		
		var buy=this;
		
		buy.toBuy = ShoppingListCheckOffService.getItemsToBuy();
		
		buy.transfer = function (itemIndex) {
		ShoppingListCheckOffService.transfer(itemIndex);
  		};
	}


	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];	
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		
		var boughtt=this;
		
		boughtt.bought= ShoppingListCheckOffService.getItemsBought();
	}



	function ShoppingListCheckOffService() {
		var service=this;
		var toBuy = [{name: "Milk",quantity: "2"},
		  {name: "Donuts",quantity: "200"},
		  {name: "Cookies",quantity: "300"},
		  {name: "Chocolate",quantity: "5"},
		  {name: "Ice-cream",quantity: "7"}];

		var bought=[];

		service.transfer=function (itemIndex) {
		var temp=toBuy[itemIndex];
			toBuy.splice(itemIndex,1);
			bought.push(temp);
		};

		service.getItemsToBuy=function () {
			return toBuy;
		};

		service.getItemsBought=function () {
			return bought;
		};

	}


})();