describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;
  var items;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController', function($scope) {});
    items = [ { "text": "Learn Javascript" }];
  }));

  xit('initializes with an empty input box and empty to do list', function() {
    expect(ctrl.toDoList).toBeUndefined();
    expect(ctrl.addItem).toBeUndefined();
  });

  it("stores a user's 'to do' items in a list", function() {
    expect(ctrl.toDoList.items).toEq(items)
  });

});
