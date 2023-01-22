const express= require('express')
const router=express.Router();

const adminController=require('../controllers/adminController.js')

router.get('/',adminController.dummy);

router.get('/user',adminController.get_user);

module.exports=router;