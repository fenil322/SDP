const express = require('express')
const router = express.Router();
const brandIsAuth = require('../middleware/brandIsAuth');
const influencerIsAuth = require('../middleware/influencerIsAuth');

const { createConsignment, getBrandRequest, acceptBrandReq, deleteBrandReq,getInfConsignment } = require('../controllers/consignmentController');

//==> Creating consignment in brand POST
router.post('/sendrequest', brandIsAuth.isAuth, createConsignment)

//==> get all request in influencer page GET
router.get('/getbrandreq', influencerIsAuth.isAuth, getBrandRequest)

//==>accepting brand req  PUT
router.put('/acceptbrandreq', influencerIsAuth.isAuth, acceptBrandReq)

//==> deleting brand req  DELETE
router.delete('/deletetbrandreq', influencerIsAuth.isAuth, deleteBrandReq)

//==> get consignmet in influencer page GET
router.get('/getinfluencerconsignments', influencerIsAuth.isAuth, getInfConsignment)


module.exports = router;