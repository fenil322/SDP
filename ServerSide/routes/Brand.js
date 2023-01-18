const express= require('express')
const router=express.Router();

const BrandController = require('../controllers/brandController');


router.get('/',(req,res,next)=>{
        res.send('<h1>hello from brand </h1>');

});
 
//==>>saving signup data POST
router.post('/signup',BrandController.brandSignUpData);

//==>> displaying all brands
router.get('/getAllbrand',BrandController.getAllBrands)



module.exports=router;
