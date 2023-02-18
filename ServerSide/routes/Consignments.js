const express = require('express')
const router = express.Router();
const brandIsAuth = require('../middleware/brandIsAuth');
const influencerIsAuth = require('../middleware/influencerIsAuth');

const { createConsignment, getBrandRequest, acceptBrandReq, deleteBrandReq,getInfConsignment,getBrandPendingRequest,
    deleteBrandPendingRequest,getBrandConsignment ,paymentupdate,getBrandCurrentConsignments,
    withoutPayment,getInfluencerCurrentConsignments,createConsignmentInf,getInfluenerPendingRequest
,getInfluencerRequest,acceptInfluencerReq,deleteInfluencerReq} = require('../controllers/consignmentController');

//==> Creating consignment in brand POST
router.post('/sendrequest', brandIsAuth.isAuth, createConsignment)

//==> creating all consignment in influencer GET
router.post('/sendrequesttobrand',influencerIsAuth.isAuth,createConsignmentInf)

//==> get pending request in influencer page GET
router.get('/getinfluencerpendingreq', influencerIsAuth.isAuth, getInfluenerPendingRequest)

//==> get arrival request in influencer page GET
router.get('/getbrandreq', influencerIsAuth.isAuth, getBrandRequest)

//==>accepting brand req  in invluencerarrivalreqpage PUT
router.put('/acceptbrandreq', influencerIsAuth.isAuth, acceptBrandReq)

//==> deleting brand req in influencerarrivalreqpage DELETE
router.delete('/deletetbrandreq', influencerIsAuth.isAuth, deleteBrandReq)

//==>accepting influencer req in brandarrivalreqpage PUT
router.put('/acceptinfluencerreq', brandIsAuth.isAuth, acceptInfluencerReq)

//==> deleting influencer req in brandarrivalreqpage DELETE
router.delete('/deletetinfluencerreq', brandIsAuth .isAuth, deleteInfluencerReq)

//==> get consignmet in influencer page GET
router.get('/getinfluencerconsignments', influencerIsAuth.isAuth, getInfConsignment)

//==> get all pending request in brand page GET
router.get('/getbrandpendingreq', brandIsAuth.isAuth, getBrandPendingRequest)

//==> get all arrival req in brand page GET
router.get('/getinfluencerreq',brandIsAuth.isAuth,getInfluencerRequest)

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