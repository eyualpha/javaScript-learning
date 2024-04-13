const fsPromise = require("fs").promises;
const promise = new Promise((resolve, rejects) => {
  resolve(fsPromise.readFile("text.txt", "utf8"));
});
async function read() {
  try {
    const data = await promise;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
read();
