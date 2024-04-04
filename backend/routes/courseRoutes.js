const express= require('express');
const router=express.Router();
const {createCourse, getCoursesByTeacherId, getCoursesByParentId}=require('../controllers/courseController');

router.get('/getCoursesByTeacherId/:id', getCoursesByTeacherId);
router.get('/getCoursesByParentId/:id', getCoursesByParentId);
router.post('/createCourse',createCourse);

module.exports=router;