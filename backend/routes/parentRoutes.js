const express= require('express');
const router=express.Router();
const {createParent,loginParent,signout}=require('../controllers/parentController');


router.post('/sign-up',createParent);

router.post('/login',loginParent);
router.get('/signout',signout);


module.exports=router;