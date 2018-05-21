
sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);

function sortByHeight(a) {
  var newArr = a.filter(e => e > -1).sort((a, b) => (a - b));
  for (i = 0; i < a.length; i++) {
    if (a[i] > -1) {
      a[i] = newArr[0];
      newArr.splice(0, 1);
    }
  }
  return a;
}