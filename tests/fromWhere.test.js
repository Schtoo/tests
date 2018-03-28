describe('fromWhere', function(){
  it('should show you Bellville as the location of the number plate', function(){
    assert.equal('Bellville', fromWhere('CY'))
  });
  it('should show you Paarl as the location of the number plate', function(){
    assert.equal('Paarl', fromWhere('CJ'))
  });
  it('should show you Cape Town as the location of the number plate', function(){
    assert.equal('Cape Town', fromWhere('CA'))
  });
  it('should give you some other place if the is no registration number', function(){
    assert.equal('Some other place!', fromWhere('regNumber'))
  });
});
