const express = require("express");
const router = express.Router();
const weatherController = require("../controllers/weatherController");

router.get("/city/:name", async (req, res) => {
  try {
    const result = await weatherController.getWeatherDetails();
    res.status(200).json({
      status: "success",
      message: "fetched data",
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "city not found",
    });
  }
});

router.post("/city", async (req, res) => {
  try {
    // console.log(req.body);
    const { city, date, humidity } = req.body;
    const weatherData = await weatherController.postWeatherDetails({
      city,
      date,
      humidity,
    });
    res.status(200).json({
      status: "success",
      message: "weather alert saved successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "error",
      message: "Failed to save weather alter",
    });
  }
});

module.exports = router;
