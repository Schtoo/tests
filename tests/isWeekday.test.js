describe('isWeekday', function(){
    it('should show you a weekday and not a weekend day', function(){
        assert.equal(true, isWeekday('Monday'))
    });
    it('should give you a weekend day not a weekday', function(){
      assert.equal(false, isWeekday('Saturday'))
    });
});
