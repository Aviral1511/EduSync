const express= require('express');
const router=express.Router();
const {createCourse,fetchAllAssignments}=require('../controllers/courseController');

router.post('/createCourse',createCourse);
router.get('/fetchAllAssignments/:id',fetchAllAssignments);
module.exports=router;