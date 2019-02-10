(function () {
	"use strict";

	angular.module('public')
	.controller('logInController',logInController);


	logInController.$inject = ['saveData','disp','ApiPath'];
	function logInController(saveData,disp,ApiPath) {
		var $ctrl=this;
		$ctrl.disp=disp;
		$ctrl.basePath=ApiPath;
		//console.log("disp :",$ctrl.disp);
		$ctrl.data=saveData.getData();
		/*console.log("getData : ",$ctrl.data.user);

          if($ctrl.data.user==undefined)
            {
              $ctrl.disp= false;
            }
          else{
              $ctrl.disp=true;
            }
		*/
		
	}
})();