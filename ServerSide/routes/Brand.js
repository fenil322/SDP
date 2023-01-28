const express= require('express')
const router=express.Router();

const {brandSignUpData,getAllBrands,brandLogin} = require('../controllers/brandController');
const brandIsAuth=require('../middleware/brandIsAuth');
const influencerIsAuth=require('../middleware/influencerIsAuth');


router.get('/',(req,res,next)=>{
        res.send('<h1>hello from brand </h1>');

});

//==>>saving signup data POST
router.post('/signup',brandSignUpData);

//==>> displaying all brands
router.get('/getAllbrand',brandIsAuth.isAuth,getAllBrands)

//=>brand login POST
router.post('/brandlogin',brandLogin)

module.exports=router;
