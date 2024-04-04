const express= require('express');
const { addQues, getQuizById } = require('../controllers/questionController');
const router=express.Router();

router.post("/addQuizQuestion/:courseId", addQues);
router.get("/getQuizById/:courseId", getQuizById);

module.exports = router;