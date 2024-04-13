array = [1, 2, 3, 4, 5];

function transform(arr, callback) {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      const newArr = arr.map(callback);
      resolve(newArr);
    }, 1000);
  });
}
function multiply(currentElement) {
  return currentElement * 5;
}
async function test(arr, action) {
  try {
    const data = await transform(arr, action);
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
test(array, multiply);
