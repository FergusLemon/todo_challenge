describe('factory: toDoListItem', function() {

  var factory;

  beforeEach(module('ToDoList'));

  beforeEach(inject(function(ToDoListItem) {
    factory = ToDoListItem;
  }))

  it("stores a user's 'to do' list", function() {
    expect(factory.toDoList.length).toBe(2);
  });
});
