//giải thuật
/*
1: convert string to array char 
2: Tim vị trí (  va ) sau đó cắt chuỗi giữa đó -> reverce -> add lại vào mảng
3: gọi lại đệ quy hàm trên là xong 
*/

reverseParentheses('a(bc(yuio))de');

function reverseParentheses(s) {
  var chars = s.split("");
  console.log((flip(chars).join("")));
  return (flip(chars).join(""));
}

/*Return array charactor -> join*/
function flip(s) {
  if (s.indexOf('(') > 0) {
    var i = 0; var j = 0; var x = 0;
    var reverse = [];

    while (x < s.length && j === 0) {
      if (s[x] === '(') {
        i = x;
      } else if (s[x] === ')') {
        s.splice(i, 1);
        s.splice(x - 1, 1);
        j = x - 1;
      }
      x++;
    }

    reverse = s.slice(i, j);
    reverse = reverse.reverse();
    for(z=0; z< reverse.length; z++, i++) {
      s[i] = reverse[z];
    }
    flip(s);
  }
  return s;
}



























// function flip(flipped) {
//   if (flipped.indexOf('(') >= 0) {
//     var j = 0;
//     var a = 0;
//     var b = 0;
//     var reversed = [];
//     while (j < flipped.length && b == 0) {
//       if (flipped[j] == '(') {
//         a = j;
//       } else if (flipped[j] == ')') {
//         flipped.splice(a, 1);
//         flipped.splice(j - 1, 1);
//         b = j - 1;
//       }
//       j++;
//     }
//     console.log('After while:', flipped);
//     reversed = flipped.slice(a, b);
//     reversed.reverse();
//     console.log('After while11111:', reversed);
//     for (var i = 0; i < reversed.length; i++ , a++) {
//       flipped[a] = reversed[i];
//     }
//     console.log('After For:', flipped);
//     flip(flipped);
//   }
//   return flipped;

// }


// function reverseParentheses(s) {
//   var chars = s.split("");
//   return (flip(chars).join(""));
// }


// console.log(reverseParentheses('a(bc)(cd(1234))(ef)(gh)de'));