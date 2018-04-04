var mostProfitableDepartment = function(salesData){
  var sales = [];
 // var departments = ' ';
 //console.log(sales);
  for(var i=0; i<salesData.length; i++){
    sales.push(salesData[i].sales);
    var max = Math.max.apply(null, sales);
    if(max === salesData[i].sales){
      var departments = salesData[i].department;
    }
  }
  return departments;
}
