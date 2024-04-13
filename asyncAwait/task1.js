const { wait } = require("../promises/task1");
async function test() {
  try {
    const data = await wait();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
test();
