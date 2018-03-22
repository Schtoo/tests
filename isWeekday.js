isWeekday('Monday');
function isWeekday(dayName){
  //console.log(dayName.startsWith('S'));
  //console.log(dayName.endsWith('Day'));
  return !dayName.startsWith('S');
}
