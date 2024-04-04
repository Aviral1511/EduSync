const express= require('express');
const router=express.Router();
const {createParent,loginParent, createForum}=require('../controllers/parentController');


router.post('/sign-up',createParent);
router.post('/login',loginParent);

router.post('/createForum',createForum);

module.exports=router;