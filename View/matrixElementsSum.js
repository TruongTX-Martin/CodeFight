/*this is good solution*/

console.log(matrixElementsSumGood(
  [[0, 1, 1, 2],
  [0, 5, 1, 0],
  [2, 0, 3, 3]]
));

function matrixElementsSumGood(matrix) {
  var count = 0;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[0].length; j++) {
      if (i > 0 && matrix[i - 1][j] === 0) {
        matrix[i][j] = 0;
      }
      count += matrix[i][j];
    }
  }
  return count;
}



/*My solution ->not good */
function matrixElementsSum(matrix) {
  var count = 0;
  for (i = 0; i < matrix.length; i++) {
    var item = matrix[i];
    for (j = 0; j < matrix[0].length; j++) {
      if (i === 0 && item[j] != 0) {
        count += item[j];
      } else if (i > 0 && checkColumnMatrixBefore(i, j, matrix)) {
        count += item[j];
      }
    }
  }
  return count;
}

function checkColumnMatrixBefore(i, j, matrix) {
  for (x = 0; x < i; x++) {
    if (matrix[x][j] === 0) {
      return false;
    }
  }
  return true;
}
