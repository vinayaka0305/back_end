const fs = require('fs/promises');

const fileName = "notes.txt"

const deletingAfile=async()=>{
    await fs.unlink(fileName);
    console.log("File deleted")
}

deletingAfile();