const event = require("node:events");
const emmiter = new event();

emmiter.on("userLogedIn", (userData) => {
  console.log(userData.name, userData.email);
});
emmiter.emit("userLogedIn", { name: "Eyu", email: "eyu@123.com" });
