const fs = require("fs");

const getDataFromDatabase = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("src/data/data.json", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

const getWeatherDataByName = async() => {
  try {
    const respose = await getDataFromDatabase();
    console.log(respose);
    return respose;
  } catch (error) {
    throw new Error("city not found");
  }
};

module.exports = { getWeatherDataByName };
