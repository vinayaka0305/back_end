const fs = require('fs/promises');

const fileName = "vinayaka.txt"

const readAfile = async()=>{
    try {
        const result = await fs.readFile(fileName);
        const data = result.toString();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

readAfile();