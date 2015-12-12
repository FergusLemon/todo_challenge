function ToDoListController(ToDoListItem) {
  var self = this;

  self.toDoList = ToDoListItem.toDoList;
  self.addItem = function() {
    ToDoListItem.addItem(self.toDoText);
    self.toDoText = '';
  };
  self.markAsComplete = function() {
    ToDoListItem.markItemComplete(self.done);
  };
}

function ToDoListItem() {
  var factory = {};
  factory.toDoList = [];
  factory.addItem = function(toDoText) {
    factory.toDoList.push({ text: toDoText, done: false});
  };
  factory.markAsComplete = function(item) {
    item.done = true;
  }
  return factory;
}

angular
  .module('ToDoList', ['ngResource'])
  .controller('ToDoListController', ['ToDoListItem', ToDoListController])
  .factory('ToDoListItem', ToDoListItem);
