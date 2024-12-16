const express = require("express");
const router = express.Router();
const weatherController = require("../controller/weatherController");


router.get("/city/:name", async (req, res) => {
  try {
    const cityName = req.params.name;
    const weatherData = await weatherController.getWeatherDataByName(cityName);
    res.status(200).json({
      status: "success",
      message: "weather data retrived",
      data: weatherData,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "failed to retrieve weather data",
    });
  }
});

router.post("/davanagere", (req, res) => {
  res.status(201).json({
    message: "post method",
  });
});

module.exports = router;
