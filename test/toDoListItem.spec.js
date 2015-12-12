describe('factory: toDoListItem', function() {

  var factory;

  beforeEach(module('ToDoList'));

  beforeEach(inject(function(ToDoListItem) {
    factory = ToDoListItem;
  }))

  it("stores a user's 'to do' list", function() {
    expect(factory.toDoList.length).toBe(0);
  });

  it("stores items as they are added by a user", function() {
    var item = "Learn Python";
    factory.addItem(item);
    expect(factory.toDoList.length).toBe(1);
  });

  it("updates an item to 'done: true' when a user marks the item as complete", function() {
    var item = "Learn Clojure";
    factory.addItem(item);
    var addedItem = factory.toDoList[0];
    factory.markAsComplete(addedItem);
    expect(addedItem.done).toBe(true);
  });
});
