describe('findItemsOver', function(){
  it('should give you all the products higher than the threshold', function(){
    assert.deepEqual([
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}],
    findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3}
  ]), 20, 2)
});
it('should give you products only higher than 20 since 20 is the threshold', function(){
  assert.notEqual([
    {name : 'apples', qty : 10},
    {name : 'apples', qty : 3}
  ], findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ]), 'not Equal', 20, 2)
});
it('should not give you products less than 20', function(){
  assert.notEqual([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},], 20, 2)
});
});
