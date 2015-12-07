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
    "text": "Learn Javascript",
    "done": false
    }, {
    "text": "Book flights",
    "done": false
  }];
  factory.addItem = function(toDoText) {
    factory.toDoList.push({ text: toDoText, done: false});
  };
  return factory;
}

angular
  .module('ToDoList', ['ngResource'])
  .controller('ToDoListController', ['ToDoListItem', ToDoListController])
  .factory('ToDoListItem', ToDoListItem);
