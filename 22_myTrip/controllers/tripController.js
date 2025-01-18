const TripSchema = require("../models/Trips");

const createTrip = async (req, res, next) => {
  try {
    const { name, duration } = req.body;
    // console.log(name,duration);
    if (!name || !duration) {
      res.status(400);
      return next(new Error("name & duration fields are required"));
    }
    const data = await new TripSchema({
      name: name,
      duration: duration,
    });
    const result = await data.save();
    res.status(201).json({
      success: true,
      status: "creation successful",
      message: "new trip created",
      result,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const getTrips = async (req, res, next) => {
  try {
    const data = await TripSchema.find();
    res.status(200).json({
      success: true,
      status: "fetching success",
      data,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = { createTrip, getTrips };
