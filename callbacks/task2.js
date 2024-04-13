function fetch(callback) {
  console.log("fetching data......");
  setTimeout(() => {
    let status = "successfull";
    callback(status);
  }, 2000);
}
fetch((x) => {
  console.log(x);
});
