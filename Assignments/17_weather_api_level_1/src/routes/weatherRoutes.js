const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

router.get("/city/:name", async (req, res) => {
  try {
    const cityName = req.params.name;
    const weatherData = await weatherController.getWeatherDataByName(cityName);
    res.status(200).json({
      statuse: "success",
      message: "Weather data retrieved",
      data: weatherData,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "error",
      message: "Failed to retrieve weather data",
      error: error.message,
    });
  }
});
router.get("/forecast/city/:name", async (req, res) => {
    try {
      const cityName = req.params.name;
      const weatherData = await weatherController.getForecaseDataByName(cityName)
      res.status(200).json({
        statuse: "success",
        message: "Weather data retrieved",
        data: weatherData,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        status: "error",
        message: "Failed to retrieve weather data",
        error: error.message,
      });
    }
  });

  router.get("/city/zipcode/:code", async (req, res) => {
    try {
      const cityName = req.params.code;
      const weatherData = await weatherController.getZipCodeByCityName(cityName)
      res.status(200).json({
        statuse: "success",
        message: "Weather data retrieved",
        data: weatherData,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        status: "error",
        message: "Failed to retrieve weather data",
        error: error.message,
      });
    }
  });

module.exports = router;
