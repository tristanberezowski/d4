//Implement MyMap, take in an array to MyMap and a callback function

function myMap(set, cb) {
  var newSet = [];
  for (var i = 0; i < set.length; i++)
    newSet.push(cb(set[i]));
  console.log(newSet);
  return newSet;
}

//-----------------------------------------------------------------------
var words = ["ground", "control", "to", "major", "tom"];
var newWords;
myMap(words, function (word) {
  return word.length;
});
myMap(words, function (word) {
  return word.toUpperCase();
});
myMap(words, function (word) {
  return word.split('').reverse().join('');
});
/* Expected
[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
*/