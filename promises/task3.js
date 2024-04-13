function failsAfter(x) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      rejects(new Error("failed"));
    }, x);
  });
}
failsAfter(2000)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err.message);
  });
