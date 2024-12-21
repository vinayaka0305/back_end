const { assert } = require("console");
const fs = require("fs");

const getDataFromDatabase = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./src/data/tours.json", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

const saveDataToDatabase = (data) => {
  return new Promise((resolve, reject) => {
    const jsonData = JSON.stringify(data);
    fs.writeFile("./src/data/tours.json", jsonData, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
//put method means all proprties we need to send
//patch method means send single property it will update

//get method
const getTourDetails = async () => {
  try {
    const result = await getDataFromDatabase();
    return result;
  } catch (error) {
    return error;
  }
};

//post method
const postTourDetails = async (data) => {
  try {
    let list = await getDataFromDatabase();
    let id = list[list.length - 1].id + 1;
    let newData = { id, ...data };
    list.push(newData);
    let result = await saveDataToDatabase(list);
    return result;
  } catch (error) {
    return error;
  }
};

//delete method;

const deletTourDetails = async (id) => {
  try {
    let list = await getDataFromDatabase();
    let index = list.findIndex((obj) => obj.id === id);
    list.splice(index, 1);
    let result = await saveDataToDatabase(list);
    return result;
  } catch (error) {
    return error;
  }
};

//patch method

const updateTourDetails = async (id, data) => {
  try {
    console.log(id, data);
    let list = await getDataFromDatabase();
    let index = list.findIndex((obj) => obj.id == id);
    console.log(index);
    if (index == -1) {
      throw new Error("index not found");
    } else {
      list[index] = { ...list[index], ...data };
      let result = await saveDataToDatabase(list);
      return result;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTourDetails,
  postTourDetails,
  deletTourDetails,
  updateTourDetails,
};
