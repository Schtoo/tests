
describe('findItemsOver20', function(){
  it('should give you the amount of objects more than 20', function(){
    assert.deepEqual([
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}], findItemsOver20([
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ]));
  });
  it('should give you the value 2 and not anything higher or lower', function(){
    assert.notDeepEqual('', findItemsOver20(fruits))
  });
});
