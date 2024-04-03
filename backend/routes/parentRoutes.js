const express= require('express');
const router=express.Router();
const {createParent,loginParent}=require('../controllers/parentController');


router.post('/sign-up',createParent);
router.post('/login',loginParent);

module.exports=router;