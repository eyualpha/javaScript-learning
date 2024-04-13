function random(seconds) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      let x = Math.random() * 100;
      let y = Math.floor(x);
      resolve(y);
    }, seconds);
  });
}
random(2000)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });
