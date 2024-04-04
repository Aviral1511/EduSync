const express= require('express');
const router=express.Router();
const {createParent,loginParent,signout,getAllCourses}=require('../controllers/parentController');


router.post('/sign-up',createParent);

router.post('/login',loginParent);
router.get('/signout',signout);
router.get('/getAllcourses/:id',getAllCourses);


module.exports=router;