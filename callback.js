//task 1
// function main(a, b, callback) {
//   setTimeout(() => {
//     let x = a + b;
//     callback(x);
//   }, 2000);
// }
// function show(result) {
//   console.log(result);
// }
// main(1, 2, show);

//task 2
// function fetch(callback) {
//   console.log("fetching data......");
//   setTimeout(() => {
//     let status = "successfull";
//     callback(status);
//   }, 2000);
// }
// fetch((x) => {
//   console.log(x);
// });

//task 3
// const fs = require("node:fs");
// function reading(path, callback) {
//   fs.readFile(path, "utf8", (err, data) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       callback(data);
//     }
//   });
// }
// reading("text.txt", (x) => {
//   console.log(x);
// });

//task 4
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
