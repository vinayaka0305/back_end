const e = require("express");
const fs = require("fs");

const getDataFromDatabase = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./src/data/data.json", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

const savDataToDatabase = (data) => {
  return new Promise((resolve, reject) => {
    const jsonData = JSON.stringify(data);
    fs.writeFile("./src/data/data.json", jsonData, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const getWeatherDetails = async () => {
  const result = await getDataFromDatabase();
  return result;
};

const postWeatherDetails = async (data) => {
  try {
    let list = await getDataFromDatabase();
    list.push(data);
   let result = await savDataToDatabase(list);
    return result;
  } catch (error) {
    console.log(error)
  }
};

module.exports = { getWeatherDetails, postWeatherDetails };
