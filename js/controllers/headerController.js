(function() {
  "use strict";
  angular.module('myApp').controller('HeaderController', ["$location", function($location) {
    /*
    Internal variables
    */
    var vm = this;

    vm.isActive = function(location) {
      return location === $location.path();
    }
  }
  ]);
})();
