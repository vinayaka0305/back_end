const fs = require('fs/promises');

const updateFile=async()=>{
    await fs.appendFile('notes1.txt','hello assignment 01');
    console.log('file is updated');

    //the append file will do two things if the file is already present
    //it will update the data and another thing if file is not present it
    // will create a new file
}

updateFile()