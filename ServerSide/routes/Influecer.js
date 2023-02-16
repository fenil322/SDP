const express = require('express')
const router = express.Router();

const  { influencerSignupdata, influencerlogin, getAllInfluencer, editProfiledisplay, updateProfile, influencerhome, getInfluencer 
,adrequired,adrequiredRemove
} = require('../controllers/influencrController');
const influencerIsAuth = require('../middleware/influencerIsAuth');
const brandIsAuth = require('../middleware/brandIsAuth');


//==> signup POST
router.post("/signup", influencerSignupdata);

//=>influencer login POST
router.post("/influencerlogin",influencerlogin);

//=>get Logged influencer GET
router.get("/getInfluencer",influencerIsAuth.isAuth,getInfluencer)

//==> getting influencer data GET
router.get("/getAllInfluencer",brandIsAuth.isAuth, getAllInfluencer);

//=>updating influencer data GET
router.get("/editprofiledisplay",editProfiledisplay);

//=>updating influencer data PUT
router.put("/updateprofile",influencerIsAuth.isAuth,  updateProfile);

//=>influencer home GET
router.get("/influencerhome", influencerhome);

//==>ads required influencer PUT
router.put("/adsrequired",influencerIsAuth.isAuth,  adrequired);
//==>ads required influencer PUT
router.put("/adsrequiredremove",influencerIsAuth.isAuth,  adrequiredRemove);


module.exports = router;

