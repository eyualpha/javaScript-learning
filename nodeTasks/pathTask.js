const path = require("node:path");

console.log(path.join(__dirname, __filename));

const fileExtention = path.extname(__filename);
console.log(fileExtention);

const relativePath = "/folder/file.txt";
const absolutPath = path.resolve(relativePath);
console.log(absolutPath);
