const express= require('express');

const router=express.Router();

const ManagerController=require('../controllers/managerController');


//get unvalide brand and influencer GET
router.get('/getunverifiedbrand',ManagerController.getunverifiedbrand);
router.get('/getunverifiendInfluencer',ManagerController.getunverifiendInfluencer);

//validate brand and influencer PUT
router.put('/validatebrand',ManagerController.validatebrand);
router.put('/validateinfluencer',ManagerController.validateinfluencer);

//=>String new manager POST
router.post('/managersignup',ManagerController.managersignup);

//=>loginmanager POST
router.post('/managerlogin',ManagerController.managerlogin);

module.exports=router;
