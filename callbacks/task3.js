const fs = require("node:fs");
function reading(path, callback) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      callback(data);
    }
  });
}
reading("text.txt", (x) => {
  console.log(x);
});
