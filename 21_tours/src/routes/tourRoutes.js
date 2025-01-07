const express = require('express');
const router = express.Router();

const {retrieveTours} = require('../controllers/tourController')

router.get('/',retrieveTours);

module.exports = router;