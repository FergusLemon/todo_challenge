function ToDoListController() {
  var self = this;
  self.toDoList = [];
}


angular
  .module('ToDoList', ['ngResource'])
  .controller('ToDoListController', ToDoListController);
