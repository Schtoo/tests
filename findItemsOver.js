var findItemsOver = function(objectList, threshold){
  var notherList = [];

  for (var i=0; i<objectList.length; i++){
    var itemList = objectList[i];
    if(itemList.qty > 20){
      notherList.push(itemList);
    }
  }
   return notherList;
}
