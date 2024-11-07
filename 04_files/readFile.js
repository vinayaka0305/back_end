const system = require("fs/promises");

const fileName = "notes.txt";

async function readFile() {
  let result = await system.readFile(fileName);
  console.log(result);
  console.log("file readed"); //<Buffer 68 65 6c 6c 6f 20 76 69 6e 61 79 61 6b 61>
  result = result.toString();
  console.log(result);
}

readFile();
