console.log(addBorder(
  ["abc",
    "ded"]
));


function addBorder(picture) {
  var arr = picture.map(e => '*' + e + '*');
  var lenght = arr[0].length;
  arr.unshift(createString(lenght));
  arr.push(createString(lenght));
  return arr;
}

function createString(length) {
  var result = '';
  for (i = 0; i < length; i++) {
    result += '*';
  }
  return result;
}
