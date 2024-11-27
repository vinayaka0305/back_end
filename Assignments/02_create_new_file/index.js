const fs = require('fs/promises');

// const createAfile = async()=>{
//     await fs.writeFile('newNotes.txt',"this is the assignment no 10");
//     console.log('a file is created');
// }

// createAfile();

const createAfile = async()=>{
    try{
        await fs.access('newNotes1.txt');
        console.log('file is already present');
    }catch(err){
        await fs.writeFile('newNotes1.txt','this is the new file');
        console.log('file is created');
    }
    
}

createAfile();