const express = require('express');
const router = express.Router();
const {creationOfUsers,login} = require('../controllers/userController');

router.post('/registration',creationOfUsers)
router.post('/login',login)


module.exports = router;
