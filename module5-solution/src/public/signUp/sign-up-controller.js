(function () {
	"use strict";

	angular.module('public')
	.controller('signUpController',signUpController);

	signUpController.$inject = ['$http','saveData'];
	function signUpController($http,saveData) {
		var $ctrl=this;
		$ctrl.error_mssg="";
		
		//$ctrl.error=false;
		$ctrl.submit=function () {


			$ctrl.error=false;
			//console.log($ctrl.user);

			var promise=$http({
				method: "GET",
				url: "https://taniksh-course5.herokuapp.com/menu_items/"+$ctrl.user.menu_number+".json"
			})
			.then(function (result) {
				$ctrl.success_mssg="Your information has been saved!";
				$ctrl.view="View Your Info";
				$ctrl.user.data=result.data;
				saveData.putData($ctrl.user);
				//console.log("$ctrl.user  : ",$ctrl.user);

			})
			.catch(function (error) {
				$ctrl.error_mssg="No such menu number exists";
				$ctrl.error=true;

			});
			
		};
	}

})();