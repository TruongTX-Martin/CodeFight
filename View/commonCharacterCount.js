console.log(commonCharacterCountGood("aabcc", "adcaa"));


function commonCharacterCountGood(s1, s2) {
  var string1 = s1.split('');
  var string2 = s2.split('');
  var common = 0;

  for (var i = 0; i < string1.length; i++) {
    if (string2.indexOf(string1[i]) >= 0) {
      common++;
      string2.splice(string2.indexOf(string1[i]), 1);
    }
  }
  return common;
}



//my solution -> not good 
function commonCharacterCount(s1, s2) {
  var result = [];
  var arrS1 = s1.split('');
  var arrS2 = s2.split('');
  for (i = 0; i < arrS1.length; i++) {
    if (arrS2.includes(arrS1[i]) && result.indexOf(arrS1[i]) === -1) {
      result.push(arrS1[i]);
    }
  }
  return result.join()
}
