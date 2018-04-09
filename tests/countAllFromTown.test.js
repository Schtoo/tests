describe('countAllFromTown', function(){
  it('should give you a number of reg numbers from Cape Town', function(){
    assert.deepEqual(countAllFromTown ('CY 567, CL 345, CJ 456, CL 341','CL'), 2)
  });
  it('should show you a false message if reg numbers are not from Cape Town', function(){
    assert.notEqual(countAllFromTown('234 55 L,CX 135 435,1234 MP', 'GP'), true)
  });
});
