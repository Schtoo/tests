describe('greet', function(){
    it('should show a message with a Hello and a name', function(){
        assert.equal('Hello Bob', greet('Bob'));
    });
    it('should give a message with Hello and a name', function(){
      assert.equal('Hello Gregg', greet('Gregg'));
    })
});
