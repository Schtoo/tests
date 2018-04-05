describe('fromWhere', function(){
  it('should show you Bellville as the location of the number plate', function(){
    assert.equal('Bellville', fromWhere('CY 132-345'))
  });
  it('should show you Paarl as the location of the number plate', function(){
    assert.equal('Paarl', fromWhere('CJ 231-123'))
  });
  it('should show you Cape Town as the location of the number plate', function(){
    assert.equal('Cape Town', fromWhere('CA 1233'))
  });
  it('should give you some other place if the is no registration number', function(){
    assert.equal('Some other place!', fromWhere('regNumber'))
  });
});
