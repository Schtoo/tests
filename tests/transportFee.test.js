describe('transportFee', function(){
  it('should show you the cost of transport for the morning shift', function(){
    assert.equal('R20', transportFee('morning'))
  });
  it('should show you the cost of transport for the afternoon shift', function(){
    assert.equal('R10', transportFee('afternoon'))
  });
  it('should show you the cost of transport for the night shift', function(){
    assert.equal('free', transportFee('night'))
  });
});
