describe('countAllPaarl', function(){
  it('should show you plates from Paarl', function(){
    assert.equal(3, countAllPaarl('CJ 2345, CJ 345-543, CZ 321, CJ 443,'))
  });
  it('should show you plates from Paarl', function(){
    assert.equal(countAllPaarl('CL 543-434, CK 756, CZ 786, CN 874-455, CA 245'), false)
  });
});
