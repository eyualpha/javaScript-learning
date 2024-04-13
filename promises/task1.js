function wait(seconds) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve("test");
    }, seconds);
  });
}
wait(2000)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e.message);
  });
