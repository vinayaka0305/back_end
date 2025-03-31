const fs = require('fs/promises');
const fileName = "notes.txt"
const content = "Happy Ugadi Guys"

const creatingFile=async()=>{
   await fs.writeFile(fileName,content)
   console.log("file is created")
}

creatingFile();