const express= require('express')
const router=express.Router();

const BrandController = require('../controllers/BrandController');


router.get('/',(req,res,next)=>{
        res.send('<h1>hello from brand </h1>');

});


module.exports=router;
