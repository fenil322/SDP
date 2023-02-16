const express = require('express')
const router = express.Router();
const brandIsAuth = require('../middleware/brandIsAuth');
const influencerIsAuth = require('../middleware/influencerIsAuth');

const { createConsignment, getBrandRequest, acceptBrandReq, deleteBrandReq,getInfConsignment,getBrandPendingRequest,
    deleteBrandPendingRequest,getBrandConsignment ,paymentupdate,getBrandCurrentConsignments,
    withoutPayment,getInfluencerCurrentConsignments} = require('../controllers/consignmentController');

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

//==> get all pending request in brand page GET
router.get('/getbrandpendingreq', brandIsAuth.isAuth, getBrandPendingRequest)

//==> get consignmet in brand page GET
router.get('/getbrandconsignments', brandIsAuth.isAuth, getBrandConsignment)

//==> delete pending request in brand page DELETE
router.delete('/deletetbrandpendingreq', brandIsAuth.isAuth,deleteBrandPendingRequest)

//==>payment in consignment PUT
router.put('/payment', brandIsAuth.isAuth,paymentupdate )

//==>accept conssignment without payment PUT
router.put('/consignmentwithoutpayment', brandIsAuth.isAuth,withoutPayment)

//==> current consignments of brands GET
router.get('/getbrandcurrentconsignments', brandIsAuth.isAuth, getBrandCurrentConsignments)

//==> current consignments of influencer GET
router.get('/getinfluencercurrentconsignments', influencerIsAuth.isAuth, getInfluencerCurrentConsignments)
module.exports = router;