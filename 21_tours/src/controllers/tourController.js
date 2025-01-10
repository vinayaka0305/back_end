const tourSchema = require('../models/tourShcema');

const retrieveTours = async (req, res) => {
  try {
    const result = await tourSchema.find();
    if(!result){
      res.status(404).json({
        status: "failed",
        message: "not fetched",
      });
    }else{
      res.status(200).json({
        status: "success",
        message: "fetched all data",
        result,
      });
    }

  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: error.message,
    });
  }
};

module.exports ={retrieveTours};
