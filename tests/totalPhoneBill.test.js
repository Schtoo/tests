describe('totalPhoneBill', function(){
  it("should show you the total cost of an sms", function(){
    assert.equal(totalPhoneBill('sms'), 'R0.65')
  });
  it('should show you the total cost of a call', function(){
    assert.equal(totalPhoneBill('call'), 'R2.75')
  });
  it("should give you a total of calls & sms's", function(){
    assert.equal(totalPhoneBill('call, sms, call, sms, call, call, sms'), 'R12.95')
  });
});
