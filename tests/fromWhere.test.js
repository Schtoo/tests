describe('fromWhere', function(){
  it('should show you Bellville as the location of the number plate', function(){
    assert.deepEqual(fromWhere('CY 132-345'),'Bellville')
  });
  it('should show you Paarl as the location of the number plate', function(){
    assert.deepEqual(fromWhere('CJ 231-123'), 'Paarl')
  });
  it('should show you Cape Town as the location of the number plate', function(){
    assert.deepEqual(fromWhere('CA 1233'), 'Cape Town')
  });
  it('should give you some other place if the is no registration number', function(){
    assert.equal(fromWhere('regNumber'), 'Some other place!')
  });
});
