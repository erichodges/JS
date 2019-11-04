// for ([initialization]; [condition], [final-expression]) {}

var arr = [];
for (var i = 0; i < 5; i++) {
  if (i > 2) break;
  arr.push(i);
}
console.log(arr);

var arr = [10, 9, 8, 7, 6, 5];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

var arr = [[1, 2], [3, 4], [5, 6]];
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
