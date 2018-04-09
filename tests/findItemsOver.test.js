describe('findItemsOver', function(){
  it('should give you all the products higher than the threshold', function(){
    assert.deepEqual([], findItemsOver(22), 2)
});
it('should give you products only higher than 20', function(){
  assert.notDeepEqual(4, 2, 'equals pears & Bananas', 22)
  });
  it('should give you outdoor anyhting else is not right', function(){
    assert.isTrue(true,'outdoor', 'this string is correct')
  });
  it('should state that your insert is not the expected', function(){
    assert.isFalse(false, 'carpentry', 'not expected result')
  });
});
