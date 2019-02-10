(function() {
'use strict';

angular.module('public')
.config(routeConfig)
.service('saveData',saveData);

function saveData() {
  var service=this;
  service.data={};
  service.putData=function (data) {
    service.data=data;
    //console.log("service putData",service.data);
  };

  service.getData=function () {
    return service.data;
  };
}

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signUp',{
      url: '/signUp',
      templateUrl: 'src/public/signUp/signUp.html',
      controller: 'signUpController as signUpCtrl'
    })
    .state('public.logIn',{
      url: '/logIn',
      templateUrl: 'src/public/logIn/logIn.html',
      controller: 'logInController as logInCtrl',
      resolve: {
        disp: ['saveData', function (saveData) {
          var data=saveData.getData();
          //console.log("data : ",data);
          //console.log("data.user : ",data.user);
          if(data.firstname===undefined)
            return false;
          else
            return true;
        }]
      }
    });
}
})();
