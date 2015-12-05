describe('MainController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('MainController', function($scope) {});
  }));

  it('initializes with an empty input box and empty to do list', function() {
    expect(ctrl.toDoList).toBeUndefined();
    expect(ctrl.addItem).toBeUndefined();
  });

});
