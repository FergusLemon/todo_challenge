describe('factory: toDoListItem', function() {

  var factory;

  beforeEach(module('ToDoList'));

  beforeEach(inject(function(ToDoListItem) {
    factory = ToDoListItem;
  }))

  it("stores a user's 'to do' list", function() {
    expect(factory.toDoList.length).toBe(2);
  });

  it("stores items as they are added by a user", function() {
    var item = "Learn Python";
    factory.addItem(item);
    expect(factory.toDoList.length).toBe(3);
  });

  it("updates an item to 'done: true' when a user marks the item as complete", function() {
    var item = factory.toDoList[1];
    factory.markAsComplete(item);
    expect(item.done).toBe(true);
  });
});
