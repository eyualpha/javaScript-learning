const { Buffer } = require("node:buffer");

const size = 10;
const str = "Hello, Node.js";

Buffer.alloc(size);
const dataUtf8 = Buffer.from(str, "utf8");
const dataBase64 = Buffer.from(str, "base64");

console.log("utf8 encoded value: ", dataUtf8);
console.log("base64 encoded value: ", dataBase64);



const buffer = Buffer.alloc(size);
buffer.write("Node Js");
console.log("Buffer data: ", buffer);
console.log("String data: ", buffer.toString());
