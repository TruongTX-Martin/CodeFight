allLongestStrings(["abaa", "aa", "ad", "vcd", "aba"]);

function allLongestStrings(inputArray) {
  var arrayLength = inputArray.map(e => e.length);
  var max = arrayLength.sort((a,b) => (b-a))[0];
  console.log(inputArray.filter(e => e.length === max))
}
