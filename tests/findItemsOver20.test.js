describe('findItemsOver20', function(){
  it('should give you pears and bananas', function(){
    assert.deepEqual([
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}],
    findItemsOver20([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ]))
  });
  it('should give you only products more than 20', function(){
    assert.notEqual([

        {name : 'apples', qty : 10},
        {name : 'apples', qty : 3},

      ], findItemsOver([
          {name : 'apples', qty : 10},
          {name : 'pears', qty : 37},
          {name : 'bananas', qty : 27},
          {name : 'apples', qty : 3},
        ]), 'not equal')
  });
  it('should give you products bigger tha 20 anything less or a vacancy is an error', function(){
    assert.notEqual([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ], findItemsOver([
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ]), 'not equal')
  })
});
