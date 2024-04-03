const express= require('express');
const router=express.Router();
const {createTeacher,loginTeacher}=require('../controllers/teacherController');

router.post('/sign-up',createTeacher);
router.post('/login',loginTeacher);


module.exports=router;