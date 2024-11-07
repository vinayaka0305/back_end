const system = require('fs/promises');

const fileName = "notes.txt"
const content = "hello vinayaka"

async function createFile(){
    await system.writeFile(fileName,content)
    console.log('file created')
}

createFile();

