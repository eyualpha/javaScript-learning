arr = [1, 2, 3, 4, 5];

function transform(arr, callback) {
  const newArr = arr.map(callback);
  console.log(newArr);
}
function twice(x) {
  return x * 2;
}
transform(arr, twice);
