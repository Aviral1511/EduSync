const express= require('express');
const router=express.Router();
const {createCourse}=require('../controllers/courseController');


router.post('/createCourse',createCourse);

module.exports=router;