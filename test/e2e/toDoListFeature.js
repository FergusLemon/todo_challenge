describe('To Do List', function() {

  it('has a title ', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('My to do list');
  });

  it("it stores a users to do items", function() {
    browser.get('http://localhost:8080');

    element(by.model('toDoListCtrl.toDoText')).sendKeys('Learn C#');
    element(by.className('btn')).click();

    expect(element(by.binding('item.text')).getText()).toEqual('Learn C#');
  });
});
