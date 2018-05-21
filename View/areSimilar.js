console.log(areSimilar([1, 2, 1], [1, 1, 2]));


function areSimilar(a, b) {
  var count = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      count += 1;
    }
  }
  var arr_a = a.sort((a, b) => (a - b));
  var arr_b = b.sort((a, b) => (a - b));
  return count < 3 && arr_a.join('') === arr_b.join('') ? true : false;
}
