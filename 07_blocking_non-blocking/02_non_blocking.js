const fs = require("fs/promises");

const fileName = "notes.txt";

async function readingFile() {
  let result = await fs.readFile(fileName);
  // console.log(result);
  result = result.toString();
  console.log(result);
}

//non-blocking call back will get register imediately remaining statement gets executed and once the file is ready then it will the bring data 
readingFile();
console.log('non-blocking operation');
