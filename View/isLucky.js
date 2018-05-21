
console.log(isLucky(123213));

function isLucky(n) {
  var arr = n.toString().split('').map(e => parseInt(e));
  var a = 0, b = 0;
  for (i = 0; i < arr.length / 2; i++) {
    a += arr[i];
  }

  if (arr.length % 2 === 0) {
    for (i = arr.length / 2; i < arr.length; i++) {
      b += arr[i];
    }
  } else {
    for (i = arr.length / 2 + 1; i < arr.length; i++) {
      b += arr[i];
    }
  }
  return a === b;
  // var arrEnd;
  // var arrFirst = arr.slice(0, arr.length / 2);
  // if(arr.length % 2 === 0) {
  //   arrEnd = arr.slice(arr.length / 2, arr.length);
  // }else{
  //   arrEnd = arr.slice(arr.length / 2 + 1, arr.length);
  // }
  // return (arrFirst.reduce((a,b) => (a+b)) === arrEnd.reduce((a,b) => (a+b)));
}