// Read a file
const fs = require('fs');

const getDatafromDatbase =()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./src/models/data.json',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(JSON.parse(data));
            }
        })
       
    })
}

const getTourDetails =async()=>{
    try {
        let result = await getDatafromDatbase()
        return result;
    } catch (err) {
        throw err;
    }
}

module.exports = {getTourDetails}