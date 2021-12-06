const express = require('express');
const validateController = require('../controller/validate');
const router = express.Router();

router.post('/validate', validateController.authentication)

module.exports = router;