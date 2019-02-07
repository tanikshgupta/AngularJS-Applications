(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoriesListController',MainCategoriesListController);


MainCategoriesListController.$inject = ['items'];
function MainCategoriesListController(items) {
  var category = this;
  category.items = items;
  console.log("MainCategoriesListController category.items : ",category.items);
}

})();
