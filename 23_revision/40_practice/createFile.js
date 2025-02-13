const fs = require('fs/promises');

const fileName = "vinayaka.txt"
const content = "New file is created by me"


const creatingAfile =async()=>{
    try {
        await fs.writeFile(fileName,content)
        console.log('file is created')
    } catch (error) {
        console.log('error')
    }
}

creatingAfile();