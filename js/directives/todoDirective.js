myApp.directive('todoList', function() {
  return {
    restrict: 'E',
    templateUrl: 'html/todoLists.html',
    scope: {
      done: '='
    },
    controller: 'TodoController',
    controllerAs: 'todoCtrl'
  }
});
