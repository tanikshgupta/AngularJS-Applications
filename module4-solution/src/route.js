(function () {
	'use strict';

	angular.module('MenuApp')
	.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/shoppinglist/templates/main-categories.template.html',
    controller: 'MainCategoriesListController as category',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
        
      }]
    }
  })

  .state('items',{
  	url: '/items/{itemId}',
  	templateUrl: 'src/shoppinglist/templates/main-items.template.html',
  	controller:'MainItemsController as itemss',
  	resolve:{
  		item:['$stateParams','MenuDataService',
  		function ($stateParams,MenuDataService) {
  			return MenuDataService.getItemsForCategory($stateParams.itemId);
  			
  		}]
  	}
  });
}


})();