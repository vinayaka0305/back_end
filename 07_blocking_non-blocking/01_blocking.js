const fs = require("fs");

const data = fs.readFileSync("./notes.txt", { encoding: "utf-8" });
console.log(data);
console.log("blocking operation");
