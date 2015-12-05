describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    var scope = {}
    ctrl = $controller('ToDoListController', function($scope) {});
  }));

  it('initializes with an empty input box and empty to do list', function() {
    expect(ctrl.toDoList).toBeUndefined();
    expect(ctrl.addItem).toBeUndefined();
  });

});
