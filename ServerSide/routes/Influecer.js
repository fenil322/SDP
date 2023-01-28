const express = require('express')
const router = express.Router();

const  { influencerSignupdata, influencerlogin, getAllInfluencer, editProfiledisplay, updateProfile, influencerhome } = require('../controllers/influencrController');
const influencerIsAuth = require('../middleware/influencerIsAuth');
const brandIsAuth = require('../middleware/brandIsAuth');


//==> signup POST
router.post("/signup", influencerSignupdata);

//=>influencer login POST
router.post("/influencerlogin",influencerlogin);

//==> getting influencer data GET
router.get("/getAllInfluencer",brandIsAuth.isAuth, getAllInfluencer);

//=>updating influencer data GET
router.get("/editprofiledisplay",  editProfiledisplay);

//=>updating influencer data PUT
router.put("/updateprofile",  updateProfile);

//=>influencer home GET
router.get("/influencerhome", influencerIsAuth.isAuth, influencerhome);

module.exports = router;

