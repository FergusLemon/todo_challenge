function ToDoListController(ToDoListItem) {
  var self = this;

  self.toDoList = ToDoListItem.toDoList;
  self.addItem = function() {
    ToDoListItem.addItem(self.toDoText);
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
  factory.addItem = function(toDoText) {
    factory.toDoList.push({ text: toDoText });
  }
  return factory;
}

angular
  .module('ToDoList', ['ngResource'])
  .controller('ToDoListController', ['ToDoListItem', ToDoListController])
  .factory('ToDoListItem', ToDoListItem);
