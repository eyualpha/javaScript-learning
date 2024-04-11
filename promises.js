////task 1
// const promise = new Promise((resolve, rejects) => {
//   setTimeout(() => {
//     x = "successfull";
//     resolve(x);
//     // rejects(new Error("faild"));
//   }, 2000);
// });
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e.message);
//   });

//task 2
function random() {
  const promise = new Promise((resolve, rejects) => {
    setTimeout(() => {
      let x = Math.random() * 100;
      let y = Math.floor(x);
      console.log(y);
      if (y >= 50) {
        resolve(y);
      } else {
        rejects(new Error("faild"));
      }
    }, 1000);
  });
  promise
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
}
random();

// //task 3
// function failsAfter(x) {
//   const promise = new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       let y = "true";
//       rejects(new Error("failed"));
//     }, x);
//   });
//   promise
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.error(err.message);
//     });
// }
// failsAfter(2000);
