(function () {
'use strict';

angular.module('MenuApp')
.controller('MainItemsController', MainItemsController);

// 'item' is injected through state's resolve
MainItemsController.$inject = ['item']
function MainItemsController(item) {
  var itemss = this;
  itemss.item = item;
  //itemDetail.quantity = item.quantity;
  //itemDetail.description = item.description;
}

})();
