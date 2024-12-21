const express = require("express");
const router = express.Router();
const toursController = require("../controllers/toursController");

router.get("/", async (req, res) => {
  try {
    let data = await toursController.getTourDetails();
    // console.log(data);
    res.status(200).json({
      statuse: "Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
});

module.exports = router;
