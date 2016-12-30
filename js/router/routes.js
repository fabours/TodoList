myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/todoList');
  $stateProvider
    .state('todoList', {
      url: '/todoList',
      templateUrl: 'partial-todoList.html',
      controller: 'TodoController',
      controllerAs: 'todoCtrl'
    })
    .state('todoActive', {
      url: '/todoActive',
      templateUrl: 'partial-todoActive.html',
      controller: 'TodoController',
      controllerAs: 'todoCtrl'
    })
    .state('todoCompleted', {
      url: '/todoCompleted',
      templateUrl: 'partial-todoCompleted.html',
      controller: 'TodoController',
      controllerAs: 'todoCtrl'
    })
    ;
});
