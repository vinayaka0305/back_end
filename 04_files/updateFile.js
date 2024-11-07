const system = require('fs/promises');

const fileName = "notes.txt";
const content = " how are you";


async function updatefile() {
    await system.appendFile(fileName,content)
    console.log('file updated');
}

updatefile();
