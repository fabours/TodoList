myApp.factory('TodoService', function($http, $log) {
  var todoSrv = {};

  var todos = [];

  todoSrv.getTodosList = function() {
    return todos;
  };

  todoSrv.addTodo = function(newTodo) {
    todos.push({
      name: newTodo,
      done: false
    })
  }

  todoSrv.clearCompletedTodos = function() {
    todos = todos.filter(function (todo) {
      return !todo.done;
    })
    return todos;
  }

  todoSrv.updateStatus = function(todo) {
    if (todo.done === true) {
      todo.done = false;
    } else {
      todo.done = true;
    }
  }

  return todoSrv;
});
