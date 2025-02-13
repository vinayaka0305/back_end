const fs = require('fs/promises');

const fileName = "vinayaka2.txt";
const content = "hello guddi"


const updatingAfilte = async()=>{
    try {
        await fs.appendFile(fileName,content)
        console.log("file is updated")
    } catch (error) {
        console.log(error);
    }
}

updatingAfilte();