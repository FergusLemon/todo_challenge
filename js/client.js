function ToDoListController() {
  var self = this;
  self.toDoList = [{
    "text": "Learn Javascript"
    }, {
    "text": "Book flights"
  }];
}


angular
  .module('ToDoList', ['ngResource'])
  .controller('ToDoListController', ToDoListController);
