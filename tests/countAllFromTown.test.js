describe('countAllFromTown', function(){
  it('should show you a number of reg numbers from Cape Town', function(){
    assert.equal(true, countAllFromTown('CY 567,CL 345, CJ 456,CL 341','CA'))
  });
  it('should show you all reg numbers from Cape Town', function(){
    assert.equal(countAllFromTown('234 55 L,CX 135 435,1234 MP', 'GP'), false)
  });
});
