describe('findItemsOver20', function(){
  it('should give you the amount of objects more than 20', function(){
    assert.deepEqual([], findItemsOver20 (20), 2);
  });
  it('should give you the value 2 and not anything higher or lower', function(){
    assert.notDeepEqual(2, findItemsOver20(20), 3)
  });
  it('should give show you a message stating an amount less than 2 is below the expected amount', function(){
    assert.isBelow(1, 2, '1 is below 2')
  });
  it('should give you a message showing you have entered a higher amount than expected', function(){
    assert.isAtMost(2, 4, '4 is higher or equal to 2')
  });
});
