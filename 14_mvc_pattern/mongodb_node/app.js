// code to connect node with mongodb;
const mongoClinet = require('mongodb').MongoClient;
const connect = new mongoClinet('mongodb://localhost:27017');
//if incase localhost server not founde give mongodb://127.0.0.1:27017
const db = connect.db("employeeManagement");
//if we have this database with the employeeManagement it will update or
// it create a new one


// const find =async()=>{
//     try {
//         let result = await db.collection('employeeDetails').find().toArray();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// find();


const create = async()=>{
    try {
        const obj = {
            name:"yuvraj",
            salary:20000
        }
        let result = await db.collection('salaryDetails').insertOne(obj);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

create();