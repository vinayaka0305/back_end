const fs = require('fs/promises');


const fileName = "vinayaka2.txt";

const deleteFile = async()=>{
    try {
        await fs.unlink(fileName);
        console.log("file is deleted");
    } catch (error) {
        console.log(error);
    }
}

deleteFile();