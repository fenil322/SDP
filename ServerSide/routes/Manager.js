const express= require('express');

const router=express.Router();

const ManagerController=require('../controllers/managerController');
const managerIsAuth=require('../middleware/managerIsAuth');


//get unvalide brand and influencer GET
router.get('/getunverifiedbrand',managerIsAuth.isAuth,ManagerController.getunverifiedbrand);
router.get('/getunverifiendInfluencer',managerIsAuth.isAuth,ManagerController.getunverifiendInfluencer);

//get home page GET
router.get('/managerhome',managerIsAuth.isAuth,ManagerController.gethompage)

//validate brand and influencer PUT
router.put('/validatebrand',ManagerController.validatebrand);
router.put('/validateinfluencer',ManagerController.validateinfluencer);

//validate brand and influencer DELETE
router.delete('/deletebrand',ManagerController.deletebrand);
router.delete('/deleteinfluencer',ManagerController.deleteinfluencer);


//=>String new manager POST
router.post('/managersignup',ManagerController.managersignup);

//=>loginmanager POST
router.post('/managerlogin',ManagerController.managerlogin);

module.exports=router;
