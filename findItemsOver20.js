var findItemsOver20 = function(fruitList){
  var newList = [];

  	for(var i=0; i<fruitList.length; i++){
      var listItem = fruitList[i];
      if(listItem.qty > 20){
        newList.push(listItem);
      }
    }
  return newList;
}
