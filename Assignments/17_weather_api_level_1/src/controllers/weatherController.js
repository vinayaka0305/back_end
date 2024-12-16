const fs = require("fs");

const getDataFromDatabase = async () => {
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

const getWeatherDataByName = async (cityName) => {
  const data = await getDataFromDatabase();
  //   console.log(data);
  const cityData = data.find(
    (obj) => obj.city.toLowerCase() === cityName.toLowerCase()
  );
  if (cityData) {
    return cityData.weather;
  } else {
    throw new Error("City not found");
  }
};

//level 2
const getForecaseDataByName = async (cityName) => {
  const data = await getDataFromDatabase();
  const cityData = data.find(
    (obj) => obj.city.toLowerCase() === cityName.toLowerCase()
  );
  if (cityData) {
    return cityData.forecast;
  } else {
    throw new Error("City not found");
  }
};

//level 3;

const getZipCodeByCityName = async (zipCode) => {
  const data = await getDataFromDatabase();
  const cityData = data.find(
    (obj) => obj.zipCode === zipCode
  );
  if (cityData) {
    return cityData.weather;
  } else {
    throw new Error("Zipcode not found");
  }
};

module.exports = {
  getWeatherDataByName,
  getForecaseDataByName,
  getZipCodeByCityName,
};
