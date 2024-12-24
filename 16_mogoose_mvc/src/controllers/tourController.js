const fs = require("fs");
const TourSchema = require("../models/tour");

const getDataFromDatabase = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./src/models/data.json", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

const getDataTourDetails = async () => {
  try {
    const result = await getDataFromDatabase();
    return result;
  } catch (error) {
    throw error;
  }
};

const createTourDetails = async (data) => {
  try {
    const tour = new TourSchema({
      name: data.name,
      description: data.description,
      duration: data.duration,
      price: data.price,
    });
    const result = await tour.save();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = { getDataTourDetails, createTourDetails };
