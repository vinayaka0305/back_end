const express = require('express');
const app = express();
const tourRoutes = require('./routes/tourRoutes');
// const path = require('path');

// app.use('',express.static(path.join(__dirname,'views')))
app.use('',express.static(`${__dirname}/views`))

app.use(express.json());
app.use('/api/v1/tours',tourRoutes);



module.exports = app;