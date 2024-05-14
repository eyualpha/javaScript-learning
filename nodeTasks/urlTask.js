const url = require("node:url");

const sampleUrl = "https://www.example.com/path?query=param";
const parsedUrl = url.parse(sampleUrl, String);
console.log(parsedUrl);

console.log("The formated url: ", url.format(parsedUrl));
