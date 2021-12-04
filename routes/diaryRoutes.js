const express = require('express');
const diaryController = require('../controller/diary');

const router = express.Router();

router.get('/diary', diaryController.getDiary);

router.post('/diary', diaryController.postDiary);

module.exports = router;