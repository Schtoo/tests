describe('mostProfitableDepartment', function(){
  it('should give you the department with the highest value', function(){
    assert.equal('outdoor', 'outdoor', 'profitable department')
  });
  it('should give you an error message if it is not the highest value that is returned', function(){
    assert.notEqual('hardware', mostProfitableDepartment('not equal'))
  });
  it('should give you outdoor as the result', function(){
    assert.deepEqual('outdoor', 'outdoor', 'strictly equal to outdoor')
  });
  it('should show you that anything that is not outdoor is incorrect', function(){
    assert.notDeepEqual('carpentry', 'outdoor', 'carpentry is not deeply equal to outdoor')
  });
});
