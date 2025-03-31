const fs = require('fs/promises');

const updatingAfile=()=>{
    const fileName = "notes.txt"
    const content = "\n hello floks"

    fs.appendFile(fileName,content)
    console.log("file updated")
}

updatingAfile()

