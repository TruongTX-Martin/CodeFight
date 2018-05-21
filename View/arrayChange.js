/*
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one.
 Find the minimal number of moves required to obtain a strictly increasing sequence from the input.
*/

console.log(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]));
function arrayChange(inputArray) {
  var count = 0;
  for (i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] > inputArray[i + 1]) {
      count += (inputArray[i] - inputArray[i + 1]) + 1;
      inputArray[i + 1] = (inputArray[i] - inputArray[i + 1]) + 1 + inputArray[i + 1];
      console.log('aaaa:', i, ':', count);
      console.log(inputArray);
    } else if (inputArray[i] === inputArray[i + 1]) {
      count += 1;
      inputArray[i + 1] = inputArray[i + 1] + 1;
      console.log('bbbbb:', i, ':', count);
      console.log(inputArray);
    }
  }
  return count;
}


