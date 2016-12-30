myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/todoList');
  $stateProvider
    .state('todoList', {
      url: '/todoList',
      templateUrl: 'html/partial-todoList.html',
      controller: 'TodoController',
      controllerAs: 'todoCtrl'
    })
    .state('todoActive', {
      url: '/todoActive',
      templateUrl: 'html/partial-todoActive.html',
      controller: 'TodoController',
      controllerAs: 'todoCtrl'
    })
    .state('todoCompleted', {
      url: '/todoCompleted',
      templateUrl: 'html/partial-todoCompleted.html',
      controller: 'TodoController',
      controllerAs: 'todoCtrl'
    })
    ;
});
