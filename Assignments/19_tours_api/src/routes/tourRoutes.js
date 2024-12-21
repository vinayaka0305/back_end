const express = require("express");
const router = express.Router();
const tourController = require("../controllers/tourControllers");

//get method
router.get("/tours", async (req, res) => {
  try {
    let data = await tourController.getTourDetails();
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
    });
  }
});

//post method

router.post("/tours", async (req, res) => {
  try {
    let { name, description, duration, price } = req.body;
    let result = await tourController.postTourDetails({
      name,
      description,
      duration,
      price,
    });
    res.status(200).json({
      status: "success",
      message: "tour added successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
    });
  }
});

//deletMethod;

router.delete("/tours/:id", async (req, res) => {
  try {
    let id = Number(req.params.id);
    let result = await tourController.deletTourDetails(id);
    res.status(200).json({
      message: "tour deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
    });
  }
});

//patch method

router.put("/tours/:id", async (req, res) => {
  try {
    const {id} = req.params;
    // console.log(id);
    const result = await tourController.updateTourDetails(id,req.body);
    res.status(200).json({
      message: "tour updated successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message:error.message
    });
  }
});

module.exports = router;
