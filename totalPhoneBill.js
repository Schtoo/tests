var totalPhoneBill = function(bills){
  var phoneB = bills.split(",");
  var calls = 0;
  var sms = 0;

  for(var i=0;i<phoneB.length;i++){
    switch(phoneB[i].trim()){
        case 'call':
          calls += 2.75;
          break;
        case 'sms':
          sms += 0.65;
          break;
      }
    }

    var totalCost = calls + sms;
    return "R"+totalCost.toFixed(2);
}

var test = 'calls,sms';
console.log(totalPhoneBill(test));
