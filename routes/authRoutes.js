const express = require('express');
const authController = require('../controller/auth');

const router = express.Router();

router.post('/login', authController.login);
router.get('/login', (req, res) => 
    res.json({
        msg: "success"
    })
);

module.exports = router;