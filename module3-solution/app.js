
( function () {
	'use strict';
	
 angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function foundItems() {
	var ddo={
		templateUrl: 'listItem.html',
		scope: {
				foundItem: '<',
				onRemove: '&',
				search: '<'
				},
		controller: NarrowItDownDirectiveController,
    	controllerAs: 'cntrl',
    	bindToController: true
	};

	return ddo;
}



function NarrowItDownDirectiveController() {
	var cntrl=this;
	cntrl.nothing = function () {
    	if(cntrl.foundItem.length==0)
    		return true;
    	if(cntrl.search===""){
    		cntrl.foundItem=[];
    		return true;}
    	

    return false;
  };

}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
	var ctrl=this;
	ctrl.searchTerm="";
	


	ctrl.callFunc = function () {
	 //console.log("callFunc is called");
	 //ctrl.found=MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
	 //console.log("ctrl.found is :");
	 //console.log(ctrl.foundItems);

	 var promise=MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
	 promise.then(function (result) {
	 	ctrl.found=result;
	 	//console.log("ctrl.found is :");
	 	//console.log(ctrl.found);

	 });

	};
	ctrl.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };


}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService( $http , ApiBasePath) {
	
	var service=this;
	//service.foundItems={};
	service.getMatchedMenuItems=function(searchTerm) {
		//console.log("getMatchedMenuItems is called");
		return $http({method: "GET",
                      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
                  	}).then(function (result) {
					//console.log(result.data);

					service.foundItems=result.data.menu_items;
					//console.log("Service.foundItems is : "+ service.foundItems);
					for (var i = service.foundItems.length - 1; i >= 0; i--) {
						if(service.foundItems[i].description.search(searchTerm)==-1)
							service.foundItems.splice(i,1);
					}
					//console.log("foundItems on return is : "+service.foundItems);
					return service.foundItems;
				});
	};


	service.removeItem = function (itemIndex) {
    service.foundItems.splice(itemIndex, 1);
  };


}



})();