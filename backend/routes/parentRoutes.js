const express= require('express');
const router=express.Router();
const {createParent}=require('../controllers/parentController');

router.post('/createParent',createParent);

module.exports=router;