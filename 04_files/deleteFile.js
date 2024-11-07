const system = require('fs/promises');


const fileName = "note.txt";

async function deletefile(){
    await system.unlink(fileName);
    console.log('file deleted');
}

deletefile();

