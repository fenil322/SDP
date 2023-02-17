const express= require('express')
const router=express.Router();

const {brandSignUpData,brandLogin, brandhome,getBrandData} = require('../controllers/brandController');
const brandIsAuth=require('../middleware/brandIsAuth');
const influencerIsAuth=require('../middleware/influencerIsAuth');


router.get('/',(req,res,next)=>{
        res.send('<h1>hello from brand </h1>');

});

//==>>saving signup data POST
router.post('/signup',brandSignUpData);

//==>> displaying all brands
router.get('/getAllbrand',influencerIsAuth.isAuth,brandhome)

//=>brand login POST
router.post('/brandlogin',brandLogin)


router.get('/getBrandData',brandIsAuth.isAuth,getBrandData)

module.exports=router;
