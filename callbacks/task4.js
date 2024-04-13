x = [10, 2, 3];
function transform(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callback(arr[i]);
  }
  console.log(arr);
}
function twice(x) {
  return x * 2;
}
transform(x, twice);
