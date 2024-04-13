function failsAfter(seconds) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      rejects(new Error("failed"));
    }, seconds);
  });
}
failsAfter(2000)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err.message);
  });
