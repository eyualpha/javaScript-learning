function main(a, b, callback) {
  setTimeout(() => {
    let x = a + b;
    callback(x);
  }, 2000);
}
function show(result) {
  console.log(result);
}
main(1, 2, show);
