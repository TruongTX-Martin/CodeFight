console.log(almostIncreasingSequence([1, 3, 2, 1]));

//giải thuật 
/* for tu i =0  đến length 
1:if (i < i-2 2 lan tro len -> return false ) {
2: Nếu i > i-2 gán i-1 = i-2 
3: nếu i-1 > i + 1 -> return false
}

*/
function almostIncreasingSequence(sequence) {
  var found = false;
  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      if (found) {
        return false;
      }
      found = true;

      if (i === 1 || i + 1 === sequence.length) {
        continue;
      } else if (sequence[i] > sequence[i - 2]) {
        sequence[i - 1] = sequence[i - 2];
      } else if (sequence[i - 1] >= sequence[i + 1]) {
        return false;
      }
    }
  }
  return true;
}