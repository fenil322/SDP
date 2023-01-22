const express = require('express')
const router = express.Router();

const  { influencerSignupdata, influencerlogin, getAllInfluencer, editProfiledisplay, updateProfile, influencerhome } = require('../controllers/influencrController');
const influencerIsAuth = require('../middleware/influencerIsAuth');

//==> signup GET
// router.get("/signup", (req, res) => {
//     //res.send("hello world");
// });

//==> signup POST
router.post("/signup", influencerSignupdata);

//=>influencer login POST
router.post("/influencerlogin",influencerlogin);

//==> getting influencer data GET
router.get("/getAllInfluencer", getAllInfluencer);

//=>updating influencer data GET
router.get("/editprofiledisplay",influencerIsAuth.isAuth,  editProfiledisplay);

//=>updating influencer data PUT
router.put("/updateprofile",  updateProfile);

//=>influencer home GET
router.get("/influencerhome",  influencerhome);

module.exports = router;

