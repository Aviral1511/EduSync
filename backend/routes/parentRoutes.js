const express= require('express');
const router=express.Router();
const {createParent}=require('../controllers/parentController');


router.post('/sign-up',createParent);

module.exports=router;