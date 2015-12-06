function ToDoListController(ToDoListItem) {
  var self = this;

  self.toDoList = ToDoListItem.toDoList;

  self.addItem = function() {
    self.toDoList.push({text: self.toDoText});
    self.toDoText = '';
  };
}

function ToDoListItem() {
  var factory = {};
  factory.toDoList = [{
    "text": "Learn Javascript"
    }, {
    "text": "Book flights"
  }];
  return factory;
}

angular
  .module('ToDoList', ['ngResource'])
  .controller('ToDoListController', ['ToDoListItem', ToDoListController])
  .factory('ToDoListItem', ToDoListItem);
