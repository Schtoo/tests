describe('totalPhoneBill', function(){
  it("should show you the total cost of sms's ", function(){
    assert.equal('R0.65', totalPhoneBill('sms'))
  });
  it('should show you the total cost of calls', function(){
    assert.equal('R2.75', totalPhoneBill('call'))
  });
});
