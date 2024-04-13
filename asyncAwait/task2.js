const { failsAfter } = require("../promises/task3");

async function test() {
  try {
    const data = await failsAfter();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
}
test();
