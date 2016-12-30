myApp.controller('TodoController', function(TodoService) {
  var vm = this;
  
  vm.newTodo = "";
  vm.todos = [];

  getTodos();

  function getTodos() {
    vm.todos = TodoService.getTodosList();
  }

  vm.addTodo = function() {
    var newTodo = vm.newTodo.trim();
    if (!newTodo.length) {
      return;
    }
    TodoService.addTodo(newTodo);
    vm.newTodo = "";
  }

  vm.clearCompletedTodos = function() {
    vm.todos = TodoService.clearCompletedTodos();
  }

  vm.update = function(todo) {
    TodoService.updateStatus(todo);
  }
});
