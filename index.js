// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < 4; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  var array = [+ facts + "!!!"];
  let i = 0;
  while (i < array.length) {
    console.log(facts + "!!!");
  }
  return array;
}

