const express= require('express')
const router=express.Router();

const BrandController = require('../controllers/brandController');


router.get('/',(req,res,next)=>{
        res.send('<h1>hello from brand </h1>');

});
 
router.post('/brandsignup',BrandController.brandSignUpData);


module.exports=router;
