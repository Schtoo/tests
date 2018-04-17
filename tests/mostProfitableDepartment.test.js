var data = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];
describe('mostProfitableDepartment', function(){
  it('should give you the department with the highest value', function(){
    assert.equal('outdoor', mostProfitableDepartment(data));
  });
  it('should give you an error message if it is not the highest value that is returned', function(){
    assert.notEqual('hardware', mostProfitableDepartment(data))
  });
  it('should give you outdoor as the result', function(){
    assert.deepEqual('outdoor', mostProfitableDepartment(data))
  });
  it('should show you that anything that is not outdoor is incorrect', function(){
    assert.notDeepEqual('carpentry', mostProfitableDepartment(data))
  });
});
