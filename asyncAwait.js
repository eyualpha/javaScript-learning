// task 1
// const promise = new Promise((resolve, rejects) => {
//   console.log("trying to resolve.....");
//   setTimeout(() => {
//     let x = "resolved";
//     resolve(x);
//     // rejects(new Error("faild"));
//   }, 2000);
// });
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// async function printMessage() {
//   try {
//     const data = await promise;
//     console.log(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// }
// printMessage();

// //task 2

// function failsAfter(y) {
//   const promise = new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       let x = "abc";
//       //   resolve(x);
//       rejects(new Error("failed"));
//     }, y);
//   });
//   async function control() {
//     try {
//       const data = await promise;
//       console.log(data);
//     } catch (err) {
//       console.log(err.message);
//     }
//   }
//   control();
// }

// failsAfter(2000);

// task 3
// const fsPromise = require("node:fs/promises");
// async function reading(path) {
//   try {
//     const data = await fsPromise.readFile(path, "utf8");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// reading("text.txt");

const promise = new Promise((resolve, rejects) => {
  function change(array) {
    for (let index = 0; index < array.length; index++) {
      array[index] = array[index] * 2;
    }
    resolve(array);
  }
  change();
});

x = [1, 2, 3];
async function transform(array) {
  try {
    await change();
  } catch (err) {
    console.log(err.message);
  }
}

transform(x);
