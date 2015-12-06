describe('ToDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;
  var scope;
  var fakeList = [ {
    "text": "Learn Javascript"
    }, {
    "text": "Book flights"
  }];
  var toDoText;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('ToDoListController', {
      $scope: scope,
      toDoList: fakeList
    });
  }));

  xit('initializes with an empty input box and empty to do list', function() {
    expect(ctrl.toDoList).toBeUndefined();
    expect(ctrl.addItem).toBeUndefined();
  });

  it("stores a user's 'to do' items in a list", function() {
    expect(ctrl.toDoList.length).toBe(2);
  });

  it("adds a new 'to do' item to the list when a user types a new item", function() {
    ctrl.toDoText = "Practice some more Angular";
    ctrl.addItem(toDoText);
    expect(ctrl.toDoList.length).toBe(3);
  });

});
