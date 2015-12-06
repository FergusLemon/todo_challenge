function ToDoListController() {
  var self = this;
  self.toDoList = [{
    "text": "Learn Javascript"
    }, {
    "text": "Book flights"
  }];
  self.addItem = function() {
    self.toDoList.push({text: self.toDoText});
    self.toDoText = '';
  };
}


angular
  .module('ToDoList', ['ngResource'])
  .controller('ToDoListController', ToDoListController);
