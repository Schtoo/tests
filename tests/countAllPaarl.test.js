describe('countAllPaarl', function(){
  it('should show you an amount of plate numbers from Paarl', function(){
    assert.equal(countAllPaarl('CJ 2345, CJ 345-543, CZ 321, CJ 443,'), 3)
  });
  it('should show you a message stating it is not from Paarl', function(){
    assert.notEqual(countAllPaarl('CL 543-434, CK 756, CZ 786, CN 874-455, CA 245'), 'not from Paarl')
  });
});
