const fs = require('fs/promises');

const fileName = "notes.txt";

const readingFile=async()=>{
   let result = await fs.readFile(fileName);
   console.log(result);
   result = result.toString();
   console.log(result);
}

readingFile();